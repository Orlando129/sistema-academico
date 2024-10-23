const { calcularMedia } = require('./calculoMedia')

describe("bloco de testes",()=>{
    test("testar aprovado por media",()=>{
        expect(calcularMedia(6,8)).toBe("Aprovado por média")
    })
})