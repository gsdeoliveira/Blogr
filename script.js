connect = document.getElementById('connect')
connect_menu = document.getElementById('connect-dropdown')
connect_svg = document.getElementById('connect-svg')

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