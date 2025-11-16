
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