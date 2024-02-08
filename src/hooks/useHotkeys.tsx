import { useEffect } from 'react'
import { Operator } from '../types'

type useHotkeysProps = {
  showResult: () => void
  removeValue: () => void
  reset: () => void
  appendValue: (value: string) => void
  addOperator: (newOperator: Operator) => void
}

export default function useHotkeys({ showResult, removeValue, reset, appendValue, addOperator }: useHotkeysProps) {
  useEffect(() => {
    const numRegex = /^[0-9.]$/
    const operatorRegex = /^[+-/*]$/

    const specialHotkeys = {
      Enter: () => showResult(),
      Backspace: () => removeValue(),
      Escape: () => reset(),
      '=': () => showResult()
    }

    function handleKeydown(event: KeyboardEvent) {
      const { key } = event

      if (key.match(numRegex)) {
        appendValue(key)
      } else if (key.match(operatorRegex)) {
        addOperator(key.replace('*', 'x') as Operator)
      } else if (key in specialHotkeys) {
        specialHotkeys[key as keyof typeof specialHotkeys]()
      }
    }

    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [appendValue, addOperator, removeValue, reset, showResult])
}
