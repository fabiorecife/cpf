const Modulo11 = require('@fabioalmeida/modulo11')
const modulo11 = new Modulo11(2,11)
let CPF = {
    allNumberSame (numero) {
        return /^(.)\1+$/.test(numero)
    },
    removePunctuation (numero) {
        return numero.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    },
    isNumber (numero) {
      return /^\d+$/.test(numero)
    },
    isValid (_numero) {
        let first9, last2, digit1, calc10, digit2, numero
        if ((typeof _numero) !== 'string') {
            numero = _numero.join('')
        } else {
            numero = _numero
        }
        numero = this.removePunctuation(numero)
        if (numero.length !== 11) return false
        if (!this.isNumber(numero)) return false
        if (this.allNumberSame(numero)) return false

        first9 = numero.slice(0,9)
        last2 = parseInt(numero.slice(9,11))
        digit1 = modulo11.checkDigit(first9)
        calc10 = first9 + digit1
        digit2 = modulo11.checkDigit(calc10)

        return last2 === ((digit1*10)+digit2)
    }
}

module.exports = CPF
