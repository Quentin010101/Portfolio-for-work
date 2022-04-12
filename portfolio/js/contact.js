function init(){
    const input = document.querySelectorAll('.form-section')

    input.forEach(function(element){
        element.querySelector('.contact-input').addEventListener('change', function(){
            element.style.transition = 'opacity 0.3s ease-in'
            if(this.value != ''){
                element.style.opacity = 0.7
            }else{
                element.style.opacity = 1
            }
        })
    })

    //verification formulaire
    
}
window.addEventListener('DOMContentLoaded', init)