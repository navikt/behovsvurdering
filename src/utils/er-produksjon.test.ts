import { erProduksjon } from './er-produksjon'

describe('tester funksjonen erProduksjon', () => {
  test('gir false fra uten miljø', () => {
    const url = '';
    expect(erProduksjon(url)).toBe(false)
  })
  test('gir false fra localhost', () => {
    const url = 'http://localhost:3000'
    expect(erProduksjon(url)).toBe(false)
  })
  test('gir true fra prod', () => {
    const url = 'https://behovsvurdering.nav.no'
    expect(erProduksjon(url)).toBe(true)
  })
})