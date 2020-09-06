let menu_items=document.querySelectorAll('.main__menu__item')
let submenu=document.querySelector('.main-submenu')

menu_items.forEach(menu=>{
    menu.addEventListener('mouseenter',showSubmenu)
})

submenu.addEventListener('mouseleave',hideSubmenu)

function showSubmenu(){
    const submenu=document.querySelector('.main-submenu')
    submenu.style.display = "flex";
}
function hideSubmenu() {
    const submenu=document.querySelector('.main-submenu')
    submenu.style.display = "none";
  }

