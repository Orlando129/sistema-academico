const { calcularMedia } = require('./calculoMedia')

describe("bloco de testes",()=>{
    test("testar aprovado por media",()=>{
        expect(calcularMedia(6,8)).toBe("Aprovado por média")
    });
    test("testar reprovado por media",()=>{
        expect(calcularMedia(5,2)).toBe("Reprovado por média")
    });
    test("testar na final",()=>{
        expect(calcularMedia(6,4)).toBe(`Aguardando a final. Precisa de ${7}`)
    });
    test("testar numero incorreto",()=>{
        expect(calcularMedia(11, 1)).toBe("As notas devem ser maiores que 0 e menores que 10")
    });
})