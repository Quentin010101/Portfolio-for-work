function init(){


    //verification formulaire
    const input_nom = document.getElementById('nom')
    const input_prenom = document.getElementById('prenom')
    const input_email = document.getElementById('email')
    const input_text = document.getElementById('text')

    const form = document.querySelector('form')
    console.log('r')

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
                    console.log(this.responseText)
                    let data = JSON.parse(this.responseText)
                    if(data.success != ''){
                        message_container.classList.add('message-actif')
                        setTimeout(()=>{
                            message_container.classList.remove('message-actif')                          
                        }, 3000)
                        let text = data.success
                        message_container.innerHTML = "<p>" + text + "</p>"
                    }
                    if(data.error != ''){
                        message.innerHTML = data.error 
                    }

                }
            }
            
            xmlHttp.send(post)
        }



    })
    
}
 window.addEventListener('DOMContentLoaded', init)