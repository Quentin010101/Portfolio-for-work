


function init() {
    const loader = document.getElementById('loader')
    const body = document.querySelector('body')
    body.style.overflowY = 'auto'
    loader.style.opacity = 0
    loader.style.transition = 'opacity 0.3s'
    loader.style.display = 'none'
    

    const section = document.getElementById('home')
    const header = document.querySelector('header')
    const allLi = header.querySelectorAll('li')
    const overlay = document.querySelector('.overlay')

    const night = document.getElementById('night')

    const dash = document.querySelectorAll('svg .dash')
    const dashColor = document.querySelectorAll('svg .dash-color')

    const h1 = document.querySelector('h1')

    night.classList.remove('start-opacity')

    dash.forEach(function (element) {
        let length = element.getTotalLength()

        element.style.strokeDashoffset = length + 'px'
        element.style.strokeDasharray = length + 'px'
    })
    dashColor.forEach(function (element) {
        element.setAttribute("fill-opacity", "0")
    })





    let timeLiHeader = 200
    let timePathDash = 1500
    setTimeout(function () {
        overlay.style.opacity = '0.75'
    }, 600)

    setTimeout(function () {
        section.style.padding = '0px'

        allLi.forEach(function (element) {
            setTimeout(function () {
                element.classList.add('li-actif')
                element.classList.add('li-transition')
                element.querySelector('a').style.opacity = '1'
            }, timeLiHeader)

            timeLiHeader += 150
        })


        dash.forEach(function (element) {
            element.style.transition = 'stroke-dashoffset 1.5s ease-out'
            setTimeout(function () {
                element.setAttribute("stroke", 'var(--color-b)')
                element.style.strokeDashoffset = '0px'
            }, timePathDash)

            timePathDash += 100
        })


        dashColor.forEach(function (element) {
            element.style.transition = 'fill-opacity 1.5s ease-out'
            setTimeout(function () {
                element.setAttribute("fill", 'var(--color-b)')
                element.setAttribute("fill-opacity", "1")
            }, timePathDash + 500)
        })

        setTimeout(function () {
            h1.style.transform = 'translateX(3vw)'
            h1.classList.remove('start-opacity')
        }, timePathDash)
    }, 200)

    // setTimeout(()=>{
    //     svg.style.fill = 'white'
    // }, 1200)



}

window.addEventListener('load', init)