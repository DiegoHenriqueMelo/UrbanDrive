function calcular() {
    var txtv = window.document.querySelector('input#txtvel')
    var txtv1 = window.document.querySelector('input#txtvel1')
    var txtv2 = window.document.querySelector('input#txtvel2')
    var res = window.document.querySelector('div#res')
    var nome = String(txtv.value)
    var sob = String(txtv1.value)
    var val = Number(txtv2.value)
    res.innerHTML = `Olá ${nome} ${sob}, no valor de R$${val}mil temos 7 carros à venda!`

}
function limpar(){
    var res = window.document.querySelector('div#res')
    res.innerHTML = 'Coloque seus Dados acima'
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

function clickFav1(){
    var resv1 = document.querySelector('div.res-1')
    let resposta1 = (prompt('Você quer que este veiculo seja Favoritado?'))

if(resposta1 =="Sim" ){
    resv1.innerHTML = '<img src=img/coração2.png img>'
}else if(resposta1 =='Não'){
    resv1.innerHTML ='<img src=img/coração1.png img>'
}
}
function clickFav2(){
    var resv2 = document.querySelector('div.res-2')
    let resposta1 = (prompt('Você quer que este veiculo seja Favoritado?'))

if(resposta1 =="Sim"){
    resv2.innerHTML = '<img src=img/coração2.png img>'
}else if(resposta1 =='Não'){
    resv2.innerHTML ='<img src=img/coração1.png img>'
}
}
function clickFav3(){
    var resv3 = document.querySelector('div.res-3')
    let resposta1 = (prompt('Você quer que este veiculo seja Favoritado?'))

if(resposta1 =="Sim"){
    resv3.innerHTML = '<img src=img/coração2.png img>'
}else if(resposta1 =='Não'){
    resv3.innerHTML ='<img src=img/coração1.png img>'
}
}
