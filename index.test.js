const cpf = require('./')


test('cpf is valid', () => {
    expect(cpf.isValid('84434339060')).toBe(true)
    expect(cpf.isValid([8,4,4,3,4,3,3,9,0,6,0])).toBe(true)
    expect(cpf.isValid('04436338002')).toBe(true)
    expect(cpf.isValid('044.363.380-02')).toBe(true)
    expect(cpf.isValid('30919609007')).toBe(true)

})

test('cpf is invalid', () => {
    expect(cpf.isValid('14436338002')).toBe(false)
    expect(cpf.isValid('00000000000')).toBe(false)
    expect(cpf.isValid('11111111111')).toBe(false)
    expect(cpf.isValid('044.363.380-ab')).toBe(false)
})

test('checkDigit', () => {
    expect(cpf.checkDigit('021116060')).toBe(14)
    expect(cpf.checkDigit('111111111')).toBe(11)
    expect(cpf.checkDigit('000000000')).toBe(0)
    expect(cpf.checkDigit('309196090')).toBe(7)

})

test('verificationDigits', () => {
    expect(cpf.verificationDigits('309196090')).toBe('07')
    expect(cpf.verificationDigits('021116060')).toBe('14')
})

test('cpf generator', () => {
    let cpfNumber = cpf.generate()
    expect(cpf.isValid(cpfNumber)).toBe(true)
})

test('format cpf', () => {
    let cpfNumber = cpf.generate()
    formatedCpf = cpf.format(cpfNumber)
    console.log(formatedCpf)
    expect(formatedCpf).toMatch(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)
})
