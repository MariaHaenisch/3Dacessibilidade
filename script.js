document.addEventListener('DOMContentLoaded',function(){
    const botaodeacessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesacessibilidade = document.getElementById('opcoes-acessibilidade');
    
botaodeacessibilidade.addEventListener('click', function(){
    botaodeacessibilidade.classList.toggle('rotacao-botao');
    opcoesacessibilidade.classList.toggle('apresenta-lista')
})
const alternacontraste = document.getElementById("alterna-contraste") 
alternacontraste.addEventListener('click', function(){
    document.body.classList.toggle('alto-contraste')
})

    let tamanhoAtualFonte = 1;

    const aumentaFonteBotao = document.getElementById('aumentar-fonte'); 
    

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte +=0.1;
        document.body.style.fontSize= `${tamanhoAtualFonte}rem`
    })
    const diminuiFonteBotao = document.getElementById('diminuir-fonte'); 


    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -=0.1;
        document.body.style.fontSize= `${tamanhoAtualFonte}rem`
    })

})