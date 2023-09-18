function changeLight(){
    const html = document.documentElement
    const img = document.querySelector("#profile img")

    if (html.classList.contains('light')){
        html.classList.remove('light')
        img.setAttribute('src', './avatra_light.jpg')
        img.setAttribute('alt', 'óculos escuros')
    }
    else{
        html.classList.add('light')
        img.setAttribute('src','./avatar.jpg')
        img.setAttribute('alt', 'foto normal')
    }
}
