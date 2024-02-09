let sideMenuToggler = document.querySelector("#sideMenuToggler")

let sideMenu = document.querySelector("#sideMenu")

let markets = document.querySelector("#markets")
let earnings = document.querySelector("#earnings")
let property = document.querySelector("#property")
let banking = document.querySelector("#banking")

let menuItems = [markets, earnings, property, banking]

function openCloseSideMenu() {
    if(sideMenu.classList.contains('w-24')){
        sideMenu.classList.remove('w-24');
        sideMenu.classList.add('w-96');
    } else {
        sideMenu.classList.remove('w-96');
        sideMenu.classList.add('w-24');
    }

    let openCloseIcon = sideMenuToggler.querySelector('i')
    if(openCloseIcon.classList.contains('bx-x')){
        openCloseIcon.classList.remove('bx-x');
        openCloseIcon.classList.add('bx-menu');
    }
    else {
        openCloseIcon.classList.remove('bx-menu');
        openCloseIcon.classList.add('bx-x');
    }

    menuItems.forEach(menuItem => {
        menuItem.querySelector('.nvg-menu-item').classList.toggle('hidden')
        menuItem.querySelector('.nvg-submenu').classList.toggle('hidden')
    });
}

sideMenuToggler.addEventListener('click', ()=> {
    openCloseSideMenu()
})

menuItems.forEach(menuItem => {
    menuItem.querySelector('a').addEventListener('click', ()=> {
        let div = menuItem.querySelector('.nvg-submenu');
        if(sideMenu.classList.contains('w-24')){
            openCloseSideMenu()
            if (div.classList.contains('h-0')) {
                div.classList.remove('h-0', 'opacity-0', 'invisible');
                div.classList.add('h-auto', 'opacity-100', 'visible');
            }
        } 
        else {
            if (div.classList.contains('h-0')) {
                div.classList.remove('h-0', 'opacity-0', 'invisible');
                div.classList.add('h-auto', 'opacity-100', 'visible');
            } else {
                div.classList.remove('h-auto', 'opacity-100', 'visible');
                div.classList.add('h-0', 'opacity-0', 'invisible');
            }
        }
        
    })
});
