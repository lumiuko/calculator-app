import { Operator } from '../types'
import Button from './Button'

type KeypadProps = {
  appendValue: (value: string) => void
  addOperator: (newOperator: Operator) => void
  removeValue: () => void
  showResult: () => void
  reset: () => void
}

export default function Keypad({ appendValue, addOperator, removeValue, showResult, reset }: KeypadProps) {
  return (
    <section className="mt-6 rounded-[0.625rem] p-6 bg-keypad-background grid grid-cols-4 gap-3 md:p-8 md:gap-6 keypad">
      <h2 className="sr-only">Keypad</h2>

      {new Array(10).fill(null).map((_, index) => (
        <Button
          key={index}
          text={index.toString()}
          color="primary"
          onClick={() => appendValue(index.toString())}
          style={{ gridArea: `num-${index}` }}
        />
      ))}

      {Object.entries(Operator).map(([key, value]) => (
        <Button key={key} text={value} color="primary" onClick={() => addOperator(value)} style={{ gridArea: key.toLowerCase() }} />
      ))}

      <Button text="DEL" color="secondary" onClick={() => removeValue()} style={{ gridArea: 'del' }} />
      <Button text="." color="primary" onClick={() => appendValue('.')} style={{ gridArea: 'point' }} />

      <Button text="RESET" color="secondary" isWide={true} onClick={reset} style={{ gridArea: 'reset' }} />
      <Button text="=" color="tertiary" isWide={true} onClick={showResult} style={{ gridArea: 'equals' }} />
    </section>
  )
}
