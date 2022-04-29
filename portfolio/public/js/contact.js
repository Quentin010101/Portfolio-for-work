function init(){


    //verification formulaire
    const input_nom = document.getElementById('nom')
    const input_prenom = document.getElementById('prenom')
    const input_email = document.getElementById('email')
    const input_text = document.getElementById('text')

    const form = document.querySelector('form')

    form.querySelector('input[type="submit"]').addEventListener('click', function(event){

        event.preventDefault()

        let error_email = document.querySelector('#email ~ p')
        error_email.innerHTML = ''
        if(input_email.value === ''){
            error_email.innerHTML = 'Vous devez renseigner votre email'
        }
        let error_text = document.querySelector('#text ~ p')
        error_text.innerHTML = ''
        if(input_text.value === ''){
            error_text.innerHTML = 'Vous devez ecrire un message'
        }

        if(input_email.value != '' && input_text.value != ''){
            // start Ajax
            let xmlHttp = new XMLHttpRequest();
            let url = './mail.php'
            let postObj = {
                nom: input_nom.value,
                prenom: input_prenom.value,
                email: input_email.value,
                text: input_text.value,
            }
            let post = JSON.stringify(postObj)

            xmlHttp.open("POST", url, true)
            xmlHttp.setRequestHeader("Content-Type", "application/json");
    
            xmlHttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
    
                    let message_container = document.querySelector('#message-formulaire')
                    let test = true
                    try{
                        JSON.parse(this.responseText)
                    }catch(e){
                        console.error(e)
                        test = false
                    }
                    if(test){
                        let data = JSON.parse(this.responseText)
                        message_container.classList.add('message-actif')
                        setTimeout(()=>{
                            message_container.classList.remove('message-actif')                          
                        }, 3000)
                        if(data.success != ''){
                            let text = data.success
                            message_container.innerHTML = "<p>" + text + "</p>"
                        }
                        if(data.error != ''){
                            let text = data.error
                            message_container.innerHTML = "<p>" + text + "</p>"
                        }
                        clear()
                    }else{
                        message_container.classList.add('message-actif')
                        setTimeout(()=>{
                            message_container.classList.remove('message-actif')                          
                        }, 3000)
                        message_container.innerHTML = "<p>Une erreur est survenue<br>Votre message n'a pas pu été envoyé. </p>"
                    }

                }
            }
            
            xmlHttp.send(post)
        }



    })

    function clear(){
        input_nom.value = ''
        input_prenom.value = ''
        input_email.value = ''
        input_text.value = '' 
    }
    
}
 window.addEventListener('DOMContentLoaded', init)