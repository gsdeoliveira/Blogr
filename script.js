connect = document.querySelector('#connect')
connect_menu = document.querySelector('#connect-dropdown')
connect_svg = document.querySelector('#connect-svg')
burger = document.querySelectorAll('.burger-menu img')
burger_open = document.querySelector('.burger-menu img:last-child')
burger_close = document.querySelector('.burger-menu img:first-child')
burger_menu = document.querySelector('.menu')
burger_connect = document.querySelector('#burger-connect')
burger_connect_menu = document.querySelector('#burger-connect-menu')
burger_connect_svg = document.querySelector('.burger-connect svg')




document.addEventListener('mouseup', e => {
    
    if (!connect.contains(e.target) & !connect_menu.contains(e.target)) {
        connect_menu.style.display = 'none'
        connect_svg.style.transform = 'scaleY(1)'

    }
})


connect.addEventListener("click", e => {

    if (connect_menu.style.display == 'block') {
        connect_menu.style.display = 'none'
        connect_svg.style.transform = 'scaleY(1)'
    
    } else {
        connect_menu.style.display = 'block'
        connect_svg.style.transform = 'scaleY(-1)'
    }

})

burger[0].addEventListener("click", () => {
    burger[0].style.display = 'none'
    burger[1].style.display = 'block'
    burger_menu.style.display = 'flex'

})

burger[1].addEventListener("click", () => {
    burger[1].style.display = 'none'
    burger[0].style.display = 'block'
    burger_menu.style.display = 'none'

})

burger_connect.addEventListener("click", e => {

    if (burger_connect_menu.style.display == 'inline') {
        burger_connect_menu.style.display = 'none'
        burger_connect_svg.style.transform = 'scaleY(1)'
    
    } else {
        burger_connect_menu.style.display = 'inline'
        burger_connect_svg.style.transform = 'scaleY(-1)'
    }})