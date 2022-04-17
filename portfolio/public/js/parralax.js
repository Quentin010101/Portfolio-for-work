function init(){
    let container = document.querySelectorAll('.h2-container')

    window.addEventListener('scroll', function(e){
        let index = 0
        let len = container.length
        for(index; index < len; index++){
                let target = container[index].querySelector('.scroll')
                let pos = (container[index].getBoundingClientRect().top)*target.dataset.rate - window.innerHeight/10
                target.style.transform = 'translateY('+ pos +'px)'
                target.style.transition = 'transform 0.3s ease'
        }


    })
}
window.addEventListener('DOMContentLoaded', init)