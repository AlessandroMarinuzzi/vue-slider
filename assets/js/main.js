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
        ],
        plots: [
            `The Three Flavours Cornetto trilogy (also known as the Cornetto trilogy or the Blood and Ice Cream trilogy) is an anthology series of British comedic genre films directed by Edgar Wright, written by Wright and Simon Pegg, produced by Nira Park, and starring Pegg and Nick Frost. 
            The trilogy consists of Shaun of the Dead (2004), Hot Fuzz (2007), and The World s End (2013).
            The trilogy, produced on a total budget of $38 million, has grossed more than $156 million worldwide.
            Critics have given all three films widespread acclaim.`,

            `Shaun of the Dead:
            The first film is Shaun of the Dead, a 2004 romantic zombie comedy film (self-dubbed "rom-zom-com").
            Pegg plays Shaun, a man attempting to gain focus in his life as he deals with his girlfriend, his mother and stepfather in the midst of an apocalyptic uprising of zombies.
            The trilogy's Cornetto reference begins with a scene in which Shaun buys a cone for his friend Ed (Frost) at his request as Ed wakes up groggy and badly hung over after a night of drinking. Director Edgar Wright has said that he used to use Cornettos as a hangover cure.`,

            `Hot Fuzz:
            The second entry is Hot Fuzz, a 2007 buddy cop action comedy.
            Pegg and Frost play police officers who investigate a series of mysterious deaths in a small English village; Danny Butterman (Frost) grew up there and Nicholas Angel (Pegg) is an outsider.
            The two officers purchase Cornetto cones at a convenience store at various times, and a scrap of the wrapper falls onto the counter when Angel later makes other purchases at a motorway service station.`,

            `The World's End:
            The third instalment is The World's End, a 2013 science fiction apocalyptic comedy.
            The film follows a group of friends, led by Pegg, reattempting an epic pub crawl during an alien occupation of their home town.
            In the final scene of the film, a Cornetto wrapper blows past in a breeze, briefly catching on a wire fence.
            Wright said in an interview for Entertainment Weekly, "We thought it would be a funny idea to do a sci-fi film where even the people who are going to be your saviours are hammered."`
        ]
        // plots: [
        //     "ciao1",
        //     "ciao2",
        //     "ciao3",
        //     "ciao4"
        // ]
    },

    methods:{
        prev(){
            if(this.counter === 0){
                console.log(this.plots[this.counter]);
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