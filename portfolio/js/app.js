// color
let random = Math.random() * 360
document.documentElement.style.setProperty('--color-p-1', `hsl(${random}, 20%, 75%)`);
document.documentElement.style.setProperty('--color-p-2', `hsl(${random}, 40%, 75%)`);
document.documentElement.style.setProperty('--color-p-3', `hsl(${random}, 75%, 75%)`);
document.documentElement.style.setProperty('--color-p-1-1', `hsl(${random}, 20%, 75%)`);
document.documentElement.style.setProperty('--color-p-1-2', `hsl(${random}, 20%, 45%)`);
document.documentElement.style.setProperty('--color-p-1-3', `hsl(${random}, 20%, 25%)`);


function init() {
    const loader = document.getElementById('loader')
    loader.style.opacity = 0
    loader.style.transition = 'opacity 0.3s'
    loader.style.display = 'none'

            const section = document.getElementById('home')
            const header = document.querySelector('header')
            const allLi = header.querySelectorAll('li')
            const overlay = document.querySelector('.overlay')


            const dash = document.querySelectorAll('svg .dash')
            const dashColor = document.querySelectorAll('svg .dash-color')

            const h1 = document.querySelector('h1')


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
                let docStyle = getComputedStyle(document.documentElement);
                let color = docStyle.getPropertyValue('--color-b');
                
                dash.forEach(function (element) {
                    element.style.transition = 'stroke-dashoffset 1.5s ease-out'
                    setTimeout(function () {
                        element.setAttribute("stroke", color)
                        element.style.strokeDashoffset = '0px'
                    }, timePathDash)

                    timePathDash += 100
                })


                dashColor.forEach(function (element) {
                    element.style.transition = 'fill-opacity 1.5s ease-out'
                    setTimeout(function () {
                        element.setAttribute("fill", color)
                        element.setAttribute("fill-opacity", "1")
                    }, timePathDash + 500)
                })

                setTimeout(function () {
                    h1.style.transform = 'translateX(3vw)'
                    h1.style.opacity = '1'
                }, timePathDash)
            }, 200)

            // setTimeout(()=>{
            //     svg.style.fill = 'white'
            // }, 1200)



}

window.addEventListener('load', init)