function init(){
        //Scroll

        window.addEventListener('wheel', function(e){
            if(this.window.scrollY < this.window.innerHeight && e.deltaY > 0){
                window.scrollTo({
                    top: this.window.innerHeight,
                    left: 0,
                    behavior: "smooth"
                })
            }else{
                // if(e.deltaY > 0){
                //     this.window.scrollTo({
                //         top: this.window.scrollY + this.window.innerHeight/4,
                //         left: 0,
                //         behavior: "smooth"
                //     })
                // }else{
                //     this.window.scrollTo({
                //         top: this.window.scrollY - this.window.innerHeight/4,
                //         left: 0,
                //         behavior: "smooth"
                //     })
                // }
            }
        })

}

window.addEventListener('DOMContentLoaded', init)