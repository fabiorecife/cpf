var Modulo11 = require('@fabioalmeida/modulo11')
var modulo11 = new Modulo11(2,11)
var CPF = {
    allNumberSame: function (numero) {
        return /^(.)\1+$/.test(numero)
    },
    removePunctuation: function (numero) {
        return numero.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    },
    isNumber: function (numero) {
      return /^\d+$/.test(numero)
    },
    checkDigit: function (cpfWihoutCheckDigits) {
        var digit1, digit2, calc10
        digit1 = modulo11.checkDigit(cpfWihoutCheckDigits)
        calc10 = cpfWihoutCheckDigits + digit1
        digit2 = modulo11.checkDigit(calc10)
        return ((digit1*10)+digit2)
    },
    verificationDigits: function (cpfWihoutCheckDigits) {
      var digit = this.checkDigit(cpfWihoutCheckDigits)
      digit = digit.toString()
      if (digit.length < 2) {
          digit = '0' + digit
      }
      return digit
    },
    randomInt: function(max) {
        return Math.floor(Math.random() * Math.floor(max))
    },
    generate: function () {
      var digits = []
      while (digits.length < 9) {
          digits.push(this.randomInt(9))
      }
      digits = digits.join('')
      return digits+this.verificationDigits(digits)
    },
    format: function (_cpf) {
        var cpf = this.removePunctuation(_cpf)
        return cpf.slice(0,3) + '.' + cpf.slice(3,6) + '.' + cpf.slice(6,9) + '-' + cpf.slice(9,11)
    },
    isValid: function (cpf) {
        var first9, last2, cpfString, digits
        if ((typeof cpf) !== 'string') {
            cpfString = cpf.join('')
        } else {
            cpfString = cpf
        }
        cpfString = this.removePunctuation(cpfString)
        if (cpfString.length !== 11) return false
        if (!this.isNumber(cpfString)) return false
        if (this.allNumberSame(cpfString)) return false

        first9 = cpfString.slice(0,9)
        last2 = parseInt(cpfString.slice(9,11))
        digits = this.checkDigit(first9)

        return last2 === digits
    }
}

module.exports = CPF
