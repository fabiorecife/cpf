const cpf = require('./')


test('cpf is valid', () => {
    expect(cpf.isValid('84434339060')).toBe(true)
    expect(cpf.isValid([8,4,4,3,4,3,3,9,0,6,0])).toBe(true)
    expect(cpf.isValid('04436338002')).toBe(true)
    expect(cpf.isValid('044.363.380-02')).toBe(true)
})

test('cpf is invalid', () => {
    expect(cpf.isValid('14436338002')).toBe(false)
    expect(cpf.isValid('00000000000')).toBe(false)
    expect(cpf.isValid('11111111111')).toBe(false)
    expect(cpf.isValid('044.363.380-ab')).toBe(false)
})
