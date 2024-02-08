import { useCallback, useState } from 'react'
import { calculate, formatValue } from './utils'

import Header from './components/Header'
import Keypad from './components/Keypad'
import Screen from './components/Screen'
import { Operator } from './types'
import useHotkeys from './hooks/useHotkeys'

function App() {
  const [input, setInput] = useState<string>('0')
  const [savedInput, setSavedInput] = useState<string>('0')
  const [operator, setOperator] = useState<Operator | null>(null)
  const [isOperatorSwitched, setIsOperatorSwitched] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function clear() {
    setSavedInput('0')
    setOperator(null)
  }

  const appendValue = useCallback(
    (value: string) => {
      const MAX_INPUT_LENGTH = 12
      if (input.length >= MAX_INPUT_LENGTH && !isOperatorSwitched) return

      setInput(prevInput => formatValue(isOperatorSwitched ? value : prevInput + value, isOperatorSwitched))
      setIsOperatorSwitched(false)
    },
    [input.length, isOperatorSwitched]
  )

  const addOperator = useCallback(
    (newOperator: Operator) => {
      setOperator(newOperator)
      if (isOperatorSwitched || error) return

      if (savedInput && operator) {
        const result = calculate(savedInput, input, operator)
        setSavedInput(result.toString().replace(/\.$/, ''))
        setInput(result.toString())
      } else {
        setSavedInput(input.replace(/\.$/, ''))
      }

      setIsOperatorSwitched(true)
    },
    [error, input, isOperatorSwitched, operator, savedInput]
  )

  const removeValue = useCallback(() => {
    if (error) return
    const isValue = input.length > 1 && Number.isFinite(Number(input))
    setInput(prevInput => (isValue ? String(prevInput).slice(0, -1) : '0'))
  }, [error, input])

  const showResult = useCallback(() => {
    if (!operator || error) return

    try {
      const result = calculate(savedInput, input, operator)
      setInput(String(result))
    } catch (err) {
      if (!(err instanceof Error)) return
      setError(err.message ?? 'Error')
    } finally {
      setIsOperatorSwitched(true)
      clear()
    }
  }, [error, input, operator, savedInput])

  const reset = useCallback(() => {
    setInput('0')
    setError(null)
    setIsOperatorSwitched(false)
    clear()
  }, [])

  useHotkeys({ showResult, removeValue, reset, appendValue, addOperator })

  return (
    <main className="w-full max-w-[540px]">
      <Header />
      <Screen input={input} savedInput={savedInput} operator={operator} error={error} />
      <Keypad appendValue={appendValue} addOperator={addOperator} removeValue={removeValue} showResult={showResult} reset={reset} />
    </main>
  )
}

export default App
