
/*funcionalidade do botão whatsapp*/
var btn = document.querySelector(".button"); //pega a class do botão

//onmousemove=detecta o movimento do mouse
//function(e)= o e contém informações do que aconteceu, como posição do mouse.
btn.onmousemove = function(e) {
    var x = e.pageX - btn.offsetLeft; //e.pageX e e.pageY pegam a posição absoluta do mouse na tela.
    var y = e.pageY - btn.offsetTop;//btn.offsetLeft e btn.offsetTop pegam a posição do botão.
    btn.style.setProperty('--eixoX', x + 'px');//muda o valor em tempo real conforme o mouse se move
    btn.style.setProperty('--eixoY', y + 'px');
}






/* funcionalidade do carrossel */

// Seleciona a lista que contém todos os slides
let lista = document.querySelector('.carrossel .lista');

// Seleciona todos os itens (slides) dentro da lista
let itens = document.querySelectorAll('.carrossel .lista .item');

// Seleciona todas as bolinhas de navegação (dots)
let bolinhas = document.querySelectorAll('.carrossel .dots li');

// Seleciona os botões de avançar e voltar
let back = document.getElementById('back');
let next = document.getElementById('next');

// Índice do slide que está ativo no momento
let ativo = 0;

// Pega o último índice dos itens do carrossel
let tamanhoItens = itens.length -1;



/* BOTÃO NEXT (AVANÇAR) */
next.onclick = function(){
    // Se estiver no último slide, volta para o primeiro
    if(ativo + 1 > tamanhoItens){
        ativo = 0;
    }
    // Senão, vai para o próximo slide
    else{
        ativo = ativo + 1;
    }
    // Atualiza o carrossel
    reloadSlider();
}



/* BOTÃO BACK (VOLTAR) */
back.onclick = function(){
    // Se estiver no primeiro slide, volta para o último
    if(ativo - 1 < 0){
        ativo = tamanhoItens;
    }
    // Senão, volta um slide
    else{
        ativo = ativo - 1;
    }
    // Atualiza o carrossel
    reloadSlider();
}



/* FUNÇÃO DE ROTAÇÃO AUTOMÁTICA */
let recarregarCarrossel = setInterval(() => {next.click()}, 4000);
// A cada 4s, é como se clicasse no botão "next"



/* FUNÇÃO QUE ATUALIZA O CARROSSEL */
function reloadSlider(){

    // Descobre a distância do slide ativo até a borda esquerda
    let checkLeft = itens[ativo].offsetLeft;

    // Move a lista inteira para a esquerda para mostrar o slide atual
    lista.style.left = -checkLeft + 'px';

    // Atualiza a bolinha ativa (remove a antiga)
    let botaoAtivo = document.querySelector('.carrossel .dots li.ativo' );
    botaoAtivo.classList.remove('ativo');

    // Ativa a bolinha correspondente ao slide atual
    bolinhas[ativo].classList.add('ativo');

    // Reinicia o timer do autoplay (para não bugar ao clicar manualmente)
    clearInterval(recarregarCarrossel);
    recarregarCarrossel = setInterval(() => {next.click()}, 4000);
}



/* CLICAR NAS BOLINHAS (NAVEGAÇÃO INFERIOR) */
bolinhas.forEach((li, key) => {

    // Quando clicar na bolinha...
    li.addEventListener('click', function(){

        // Define o slide ativo como o índice da bolinha clicada
        ativo = key;

        // Atualiza o carrossel
        reloadSlider();
    })
})










/*funcionalidade da barra de navegação para dispositivos mobile*/
class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.MobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.MobileMenu.classList.toggle(this.activeClass)
        this.animateLinks();
    }
    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ?(link.style.animation = "")
            :(link.style.animation = `navLinkFade 0.5s ease forwards ${index/ 7 + 0.3}s`)
            
        })
    }
    addClickEvent(){
        this.MobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.MobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar(
    "#Mobile-menu",
    ".nav-list",
    ".nav-list li",
)
mobileNavbar.init();








document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".paginaModalidades");

    botoes.forEach((botao, index) => {
        botao.addEventListener("click", () => {

            if (index === 0) {
                window.open("../html/modal.html#misto", "_self"); // 1º = misto
            }
            if (index === 1) {
                window.open("../html/modal.html#infantil", "_self"); // 2º = kids
            }
            if (index === 2) {
                window.open("../html/modal.html#comtemporaneo", "_self"); // 3º = contemporâneo (mesmo id que você usou antes)
            }
            if (index === 3) {
                window.open("../html/modal.html#ginasticaritmica", "_self"); // 4º = rítmica
            }

        });
    });
});

