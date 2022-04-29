function init() {
    const button = document.querySelector('#night')
    let theme = document.documentElement.style.setProperty('--theme', 'light')

    // color
    let random = Math.random() * 360
    document.documentElement.style.setProperty('--color-p-1', `hsl(${random}, 20%, 75%)`);
    document.documentElement.style.setProperty('--color-p-2', `hsl(${random}, 50%, 85%)`);
    document.documentElement.style.setProperty('--color-p-3', `hsl(${random}, 75%, 75%)`);
    document.documentElement.style.setProperty('--color-p-1-1', `hsl(${random}, 20%, 75%)`);
    document.documentElement.style.setProperty('--color-p-1-2', `hsl(${random}, 20%, 45%)`);
    document.documentElement.style.setProperty('--color-p-1-3', `hsl(${random}, 20%, 25%)`);

    button.addEventListener('click', function () {
        animation()
        theme = document.documentElement.style.getPropertyValue('--theme')
        if (theme == 'dark') {

            document.documentElement.style.setProperty('--color-b', 'rgb(59, 59, 59)')
            document.documentElement.style.setProperty('--color-w', 'rgb(236, 236, 236)')
            document.documentElement.style.setProperty('--color-w-1', 'rgb(255, 255, 255)')
            document.documentElement.style.setProperty('--color-b-1', 'rgb(206, 206, 206)')
            document.documentElement.style.setProperty('--color-v-1', 'rgb(59, 59, 59)')
            document.documentElement.style.setProperty('--theme', 'light')

            document.documentElement.style.setProperty('--color-p-1', `hsl(${random}, 20%, 75%)`);
            document.documentElement.style.setProperty('--color-p-2', `hsl(${random}, 70%, 85%)`);
            document.documentElement.style.setProperty('--color-p-3', `hsl(${random}, 75%, 75%)`);
            document.documentElement.style.setProperty('--color-p-1-1', `hsl(${random}, 20%, 75%)`);
            document.documentElement.style.setProperty('--color-p-1-2', `hsl(${random}, 20%, 45%)`);
            document.documentElement.style.setProperty('--color-p-1-3', `hsl(${random}, 20%, 45%)`);
            
        }
        else if (theme == 'light') {
            
            document.documentElement.style.setProperty('--color-b', 'rgb(214, 214, 214)')
            document.documentElement.style.setProperty('--color-w', 'rgb(14, 14, 14)')
            document.documentElement.style.setProperty('--color-w-1', 'rgb(20, 20, 20)')
            document.documentElement.style.setProperty('--color-b-1', 'rgb(111, 111, 111)')
            document.documentElement.style.setProperty('--color-v-1', 'rgb(250, 250, 250)')
            document.documentElement.style.setProperty('--theme', 'dark')
            
            document.documentElement.style.setProperty('--color-p-1', `hsl(${random}, 20%, 45%)`);
            document.documentElement.style.setProperty('--color-p-2', `hsl(${random}, 60%, 20%)`);
            document.documentElement.style.setProperty('--color-p-3', `hsl(${random}, 75%, 30%)`);
            document.documentElement.style.setProperty('--color-p-1-1', `hsl(${random}, 80%, 75%)`);
            document.documentElement.style.setProperty('--color-p-1-2', `hsl(${random}, 80%, 65%)`);
            document.documentElement.style.setProperty('--color-p-1-3', `hsl(${random}, 80%, 70%)`);
        }


    })

    let moon = document.querySelector('svg.svg-moon')
    let sun = document.querySelector('svg.svg-sun')
    function animation(){
        moon.classList.toggle('svg-opacity')
        sun.classList.toggle('svg-opacity')

        moon.classList.add('svg-animation')
        sun.classList.add('svg-animation')
        setTimeout(function(){
            moon.classList.remove('svg-animation')
            sun.classList.remove('svg-animation')
        }, 710)
  
    }
}
window.addEventListener('DOMContentLoaded', init)