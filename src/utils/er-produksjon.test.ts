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
  test('gir true fra prod på mulig ny url', () => {
    const url = 'https://nav.no/arbeid/behovsvurdering'
    expect(erProduksjon(url)).toBe(true)
  })
  test('gir false fra dev på mulig ny url', () => {
    const url = 'https://dev.nav.no/arbeid/behovsvurdering'
    expect(erProduksjon(url)).toBe(false)
  })
})