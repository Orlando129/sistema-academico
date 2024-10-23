function calcularMedia(up1,up2){
    if((up1 >= 0 && up1 <= 10) && (up2 >=0 && up2 <= 10)){
        const media = up1+up2/2
        if(media >= 6){
            return "Aprovado por média"
        }
        if(media < 4){
            return "Reprovado por média"
        }

        if(media >= 4 && media < 6){
            notaNecessariaNaFinal = 12 - media
            return `Aguardando a final. Precisa de ${notaNecessariaNaFinal}`
        }
    }
    return "As notas devem ser maiores que 0 ou menores que 10"
}

module.exports = {calcularMedia}