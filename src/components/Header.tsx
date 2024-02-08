import { useId } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const themes = ['default', 'light', 'violet']

type CustomStyle = {
  '--offset': string
}

type MergedStyle = CustomStyle & React.CSSProperties

export default function Header() {
  const id = useId()

  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    const themeInStorage = localStorage.getItem('theme')
    return themeInStorage && themes.includes(themeInStorage) ? themeInStorage : themes[0]
  })

  function handleChange(themeName: string) {
    setCurrentTheme(themeName)
  }

  useEffect(() => {
    document.documentElement.dataset.theme = currentTheme
    localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  const switchStyle: MergedStyle = {
    '--offset': `${themes.indexOf(currentTheme) * 23}px`
  }

  return (
    <header className="flex justify-between items-end">
      <h1 className="text-xl leading-7 tracking-tight ml-2">calc</h1>
      <div className="flex items-end gap-[1.625rem] text-sm leading-3">
        <p className="uppercase tracking-wider mb-[0.3125rem]">Theme</p>
        <div className="flex flex-col gap-1">
          <div className="flex justify-center gap-3">
            {themes.map((theme, index) => (
              <label key={index} className="min-w-[12px] text-center" htmlFor={`theme-${theme}-${id}`}>
                {index + 1}
              </label>
            ))}
          </div>
          <div
            className="w-[72px] h-[26px] bg-toggle-background rounded-full flex justify-between cursor-pointer *:appearance-none *:cursor-pointer relative before:size-4 before:bg-tertiary-background before:rounded-full before:absolute before:left-[5px] before:top-[5px] before:transition-all before:translate-x-[var(--offset)] toggle"
            style={switchStyle}
          >
            {themes.map((theme, index) => (
              <input
                key={index}
                id={`theme-${theme}-${id}`}
                type="radio"
                name="theme"
                className="relative h-full flex-1 rounded-full bg-[transparent]"
                onChange={() => handleChange(theme)}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
