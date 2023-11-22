
function calcular() {
    var txtv = window.document.querySelector('input#txtvel')
    var txtv1 = window.document.querySelector('input#txtvel1')
    var txtv2 = window.document.querySelector('input#txtvel2')
    var res = window.document.querySelector('div#res')
    var nome = String(txtv.value)
    var marca = String(txtv1.value)
    var val = Number(txtv2.value)
    if(nome ===  "" || marca === "" || val === 0){
        res.innerHTML = "[ERRO] INSIRA DADOS NO CAMPO ACIMA"
    }else{
        res.innerHTML = `Olá ${nome}, nós temos 2 veículos da marca ${marca} no valor de ${val}`
    }
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
    var resv1 = document.querySelector('span#res1')
    let resposta1 = (prompt('Você quer que este veiculo seja Favoritado? Digite 1 para Sim e 2 para Não'))

if(resposta1 == 1 ){
    resv1.innerHTML = '<img src=img/coração2.png img>'
}else if(resposta1 == 2){
    resv1.innerHTML ='<img src=img/coração1.png img>'
} else{
    resv1.innerHTML ='<img src=img/coração1.png img>'
}
}
function clickFav2(){
    var resv2 = document.querySelector('span#res2')
    let resposta1 = (prompt('Você quer que este veiculo seja Favoritado? Digite 1 para Sim e 2 para Não'))

if(resposta1 == 1){
    resv2.innerHTML = '<img src=img/coração2.png img>'
}else if(resposta1 == 2){
    resv2.innerHTML ='<img src=img/coração1.png img>'
}else{
    resv2.innerHTML ='<img src=img/coração1.png img>'
}
}
function clickFav3(){
    var resv3 = document.querySelector('span#res3')
    let resposta1 = (prompt('Você quer que este veiculo seja Favoritado? Digite 1 para Sim e 2 para Não'))

if(resposta1 == 1){
    resv3.innerHTML = '<img src=img/coração2.png img>'
}else if(resposta1 == 2){
    resv3.innerHTML ='<img src=img/coração1.png img>'
}else{
    resv3.innerHTML ='<img src=img/coração1.png img>'
}
}
function clickFav4(){
    var resv4 = document.querySelector('span#res4')
    let resposta1 = (prompt('Você quer que este veiculo seja Favoritado? Digite 1 para Sim e 2 para Não'))

if(resposta1 == 1){
    resv4.innerHTML = '<img src=img/coração2.png img>'
}else if(resposta1 == 2){
    resv4.innerHTML ='<img src=img/coração1.png img>'
}else{
    resv4.innerHTML ='<img src=img/coração1.png img>'
}
}
function clickFav5(){
    var resv5 = document.querySelector('span#res5')
    let resposta1 = (prompt('Você quer que este veiculo seja Favoritado? Digite 1 para Sim e 2 para Não'))

if(resposta1 == 1){
    resv5.innerHTML = '<img src=img/coração2.png img>'
}else if(resposta1 == 2){
    resv5.innerHTML ='<img src=img/coração1.png img>'
}else{
    resv5.innerHTML ='<img src=img/coração1.png img>'
}
}
function clickFav6(){
    var resv6 = document.querySelector('span#res6')
    let resposta1 = (prompt('Você quer que este veiculo seja Favoritado? Digite 1 para Sim e 2 para Não'))

if(resposta1 == 1){
    resv6.innerHTML = '<img src=img/coração2.png img>'
}else if(resposta1 == 2){
    resv6.innerHTML ='<img src=img/coração1.png img>'
}else{
    resv6.innerHTML ='<img src=img/coração1.png img>'
}
}
function clickFav7(){
    var resv7 = document.querySelector('span#res7')
    let resposta1 = (prompt('Você quer que este veiculo seja Favoritado? Digite 1 para Sim e 2 para Não'))

if(resposta1 == 1){
    resv7.innerHTML = '<img src=img/coração2.png img>'
}else if(resposta1 == 2){
    resv7.innerHTML ='<img src=img/coração1.png img>'
}else{
    resv7.innerHTML ='<img src=img/coração1.png img>'
}
}
function clickFav8(){
    var resv8 = document.querySelector('span#res8')
    let resposta1 = (prompt('Você quer que este veiculo seja Favoritado? Digite 1 para Sim e 2 para Não'))

if(resposta1 == 1){
    resv8.innerHTML = '<img src=img/coração2.png img>'
}else if(resposta1 == 2){
    resv8.innerHTML ='<img src=img/coração1.png img>'
}else{
    resv8.innerHTML ='<img src=img/coração1.png img>'
}
}
function clickFav9(){
    var resv9 = document.querySelector('span#res9')
    let resposta1 = (prompt('Você quer que este veiculo seja Favoritado? Digite 1 para Sim e 2 para Não'))

if(resposta1 == 1){
    resv9.innerHTML = '<img src=img/coração2.png img>'
}else if(resposta1 == 2){
    resv9.innerHTML ='<img src=img/coração1.png img>'
}else{
    resv9.innerHTML ='<img src=img/coração1.png img>'
}
}
function clickFav10(){
    var resv10 = document.querySelector('span#res10')
    let resposta1 = (prompt('Você quer que este veiculo seja Favoritado? Digite 1 para Sim e 2 para Não'))

if(resposta1 == 1){
    resv10.innerHTML = '<img src=img/coração2.png img>'
}else if(resposta1 == 2){
    resv10.innerHTML ='<img src=img/coração1.png img>'
}else{
    resv10.innerHTML ='<img src=img/coração1.png img>'
}
}
function clickFav11(){
    var resv11 = document.querySelector('span#res11')
    let resposta1 = (prompt('Você quer que este veiculo seja Favoritado? Digite 1 para Sim e 2 para Não'))

if(resposta1 == 1){
    resv11.innerHTML = '<img src=img/coração2.png img>'
}else if(resposta1 == 2){
    resv11.innerHTML ='<img src=img/coração1.png img>'
}else{
    resv11.innerHTML ='<img src=img/coração1.png img>'
}
}
function clickFav12(){
    var resv12 = document.querySelector('span#res12')
    let resposta1 = (prompt('Você quer que este veiculo seja Favoritado? Digite 1 para Sim e 2 para Não'))

if(resposta1 == 1){
    resv12.innerHTML = '<img src=img/coração2.png img>'
}else if(resposta1 == 2){
    resv12.innerHTML ='<img src=img/coração1.png img>'
}else{
    resv12.innerHTML ='<img src=img/coração1.png img>'
}
}
