/* 
Creare uno slider di immagini: potete usare le immagini che desiderate.
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera (usate un event listener su document e ascoltate per il keyup)
Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
Clicchiamo sui pallini e mostriamo l’immagine corrispondente
 */

const root = new Vue({
    el: "#root",

    data: {
        counter: 0,
        images: [
            "./assets/img/The-Three-Flavours-Cornetto-Trilogy.png",
            "./assets/img/Shaun-of-the-Dead.jpg",
            "./assets/img/Hot-Fuzz.jpg",
            "./assets/img/The_World's_End.jpg"
        ]
    },

    methods:{
        prev(){
            if(this.counter === 0){
                return this.counter = this.images.length - 1
            }
            return this.counter -=1
            

        },
        next(){
            if(this.counter === this.images.length - 1){
                return this.counter = 0
            }
            return this.counter += 1
        },

        change(counter){
            return this.counter = counter;
        }
    }

});

document.addEventListener("keyup", function(event){
    if(event.code === "ArrowLeft"){
        root.prev()
    } else if(event.code === "ArrowRight"){
        root.next()
    }
})