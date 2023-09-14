function calcular(){
    var name = window.document.querySelector('input#iname')
    var sobr = window.document.querySelector('input#isobre')
    var val = window.document.querySelector('input#imoney')
    var car = window.document.getElementsByName('radcar')
    var res = window.document.querySelector('div#res')
    

    if(name.value.length == 0 ){
        window.alert('[ERRO] Verifique os dados')
    } else{

    }
    res.innerHTML = `Olá, ${name} ${sobr}, veiculo ${car} no valor de ${val} temos 7 unidades!`
}

function mudouTamanho(){
    if (window.innerWidth >= 768){
        itens.style.display = 'block'
    } else{
        itens.style.display = 'none'
    }
}
function clickMenu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    } else{
        itens.style.display = 'block'
    }
}