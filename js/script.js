
/*funcionalidade do botão whatsapp*/
var btn = document.querySelector(".button");

btn.onmousemove = function(e) {
    var x = e.pageX - btn.offsetLeft;
    var y = e.pageY - btn.offsetTop;
    btn.style.setProperty('--eixoX', x + 'px');
    btn.style.setProperty('--eixoY', y + 'px');
}


/*funcionalidade do carrossel*/
let lista = document.querySelector('.carrossel .lista');
let itens = document.querySelectorAll('.carrossel .lista .item');
let bolinhas = document.querySelectorAll('.carrossel .dots li');
let back = document.getElementById('back');
let next = document.getElementById('next');

let ativo = 0;
let tamanhoItens = itens.length -1;

next.onclick = function(){
    if(ativo +1 > tamanhoItens){
        ativo = 0;
    }
    else{
        ativo = ativo +1;
    }
    reloadSlider();
}
back.onclick = function(){
    if(ativo - 1 <0){
        ativo = tamanhoItens;
    }
    else{
        ativo = ativo -1;
    }
    reloadSlider();
}
let recarregarCarrossel = setInterval(() => {next.click()}, 4000);
function reloadSlider(){
    let checkLeft = itens[ativo].offsetLeft;
    lista.style.left = -checkLeft + 'px';

    let botaoAtivo = document.querySelector('.carrossel .dots li.ativo' );
    botaoAtivo.classList.remove('ativo');
    bolinhas[ativo].classList.add('ativo');
    clearInterval(recarregarCarrossel);
    recarregarCarrossel = setInterval(() => {next.click()}, 4000);
}
bolinhas.forEach((li,key) => {
    li.addEventListener('click', function(){
        ativo = key;
        reloadSlider()
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