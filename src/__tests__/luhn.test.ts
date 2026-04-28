import { luhnCheck } from '../services/luhn'

describe('luhnCheck', () => {
  
  it('should return true for a valid card number', () => {
    expect(luhnCheck('4532015112830366')).toBe(true)
  })

  it('should return false for an invalid card number', () => {
    expect(luhnCheck('1234567890123456')).toBe(false)
  })

  it('should return false for an empty string', () => {
    expect(luhnCheck('')).toBe(false)
  })

  it('should handle card numbers with spaces', () => {
    expect(luhnCheck('4532 0151 1283 0366')).toBe(true)
  })

  it('should return false for a single digit', () => {
    expect(luhnCheck('5')).toBe(false)
  })

})