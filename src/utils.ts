import { Operator } from './types'

export function calculate(a: string, b: string, operator: Operator): number {
  const numberA = Number(a)
  const numberB = Number(b)

  let result: number = 0

  switch (operator) {
    case Operator.ADD:
      result = numberA + numberB
      break
    case Operator.SUBTRACT:
      result = numberA - numberB
      break
    case Operator.MULTIPLY:
      result = numberA * numberB
      break
    case Operator.DIVIDE:
      if (numberB === 0) {
        throw new Error(`Can't divide`)
      }
      result = numberA / numberB
      break
    default:
      throw new Error('Unsupported operator')
  }

  if (result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER) {
    throw new Error('Overflow')
  }

  return Number(result.toFixed(10))
}

export function formatValue(input: string, isOperatorSelected: boolean): string {
  return input.replace(/^0(?!\.)|(?<=\..*)\./g, isOperatorSelected ? '0' : '')
}
