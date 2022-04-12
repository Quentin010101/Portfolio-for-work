function init(){
    const header = document.querySelector('header')
    const sectionApropos = document.getElementById('aPropos')
    const burger = document.getElementById('burger')
    const body = document.querySelector('body')
    const li = document.querySelectorAll('header li')
    const lien = document.querySelectorAll('header a')


    if(window.innerWidth > 1000){
        window.addEventListener('scroll', function(){
            if(sectionApropos.getBoundingClientRect().top <= this.window.innerHeight/10 && !header.classList.contains('header-burger')){
                header.classList.add('header-burger')
                burger.classList.add('burger-actif')
                li.forEach(function(e){
                    if(e.classList.contains('li-transition')){
                        e.classList.remove('li-transition')
                    }
                })
            }else if(sectionApropos.getBoundingClientRect().top > this.window.innerHeight/10 && header.classList.contains('header-burger')){
                header.classList.remove('header-burger')
                burger.classList.remove('burger-actif')
            }
        })
    }else{
        header.classList.add('header-burger')
        burger.classList.add('burger-actif')
    }

    burger.addEventListener('click', function(){
        burger_animation()
    })

    function burger_animation(){
            burger.querySelectorAll('div').forEach( function(e){
                e.classList.toggle('actif')
            })
            header.classList.toggle('header-transition')
            header.classList.toggle('actif')
            if(header.classList.contains('actif')){
                body.style.overflowY = 'hidden'
            }else{
                body.style.overflowY = 'scroll'
            }
    }

    lien.forEach(function(e){
        e.addEventListener('click', function(event){
            event.preventDefault()
            if(burger.classList.contains('burger-actif')){
                burger_animation()
                
                setTimeout(()=>{
                    scrollTo_lien(e)
                }, 50)
            }else{
                scrollTo_lien(e)
            }
        })
    })

    function scrollTo_lien(element){
        let id = element.dataset.location
        let location = document.getElementById(id).offsetTop
        window.scrollTo({
            top: location,
            left: 0,
            behavior: "smooth"
        })
    }
}
window.addEventListener('DOMContentLoaded', init)