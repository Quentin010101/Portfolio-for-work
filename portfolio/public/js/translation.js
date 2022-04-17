function init() {
    let container_translation = document.querySelectorAll('.container_translation')

    window.addEventListener('scroll', function () {
        container_translation.forEach(function (element) {
            let distance = element.getBoundingClientRect().top
            if (distance < window.innerHeight / 1.2) {
                let container_enfant = element.querySelectorAll('.objet_translation')

                
                if (element.dataset.type === 'translation') {
                    let index = 100
                    container_enfant.forEach(function (element) {

                        setTimeout(() => {
                            let time = 0.3 + (index / 1000)

                            element.style.opacity = 1
                            if(element.dataset.sens === 'vertical'){
                                element.style.transform += ' translateY(0px)'
                            }else{
                                element.style.transform += ' translateX(0vw)'
                            }
                            element.style.transition = 'all ' + time + 's ease-out'

                            if (element.classList.contains('fill')) {
                                setTimeout(() => {
                                    element.querySelector('svg path').style.fill = 'var(--color-b)'
                                }, index + 500)
                            }

                        }, index)

                        index += 100
                    })

                } else if (element.dataset.type === 'opacity') {
                    let index = 100
                    container_enfant.forEach(function (e) {
                        setTimeout(() => {
                            e.style.opacity = 0.9;
                            e.style.transition = 'opacity 0.6s ease-in'
                        }, index)
                        index += 100
                    })

                } else if (element.dataset.type === 'svg') {
                    container_enfant.forEach(function (e) {
                        let index = 100
                        
                        let length = e.getTotalLength()
                        e.style.strokeDashoffset = length + 'px'
                        e.style.strokeDasharray = length + 'px'

                            e.style.transition = 'stroke-dashoffset 1.1s ease-out 1.6s'
                            e.style.strokeDashoffset = 0 + 'px'
                    })
                }

            }
        })
    })


}
window.addEventListener('DOMContentLoaded', init)

