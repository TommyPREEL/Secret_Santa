import {Participant} from './participant.js'

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/12646864#12646864
 */
 function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

// let participant1 = new Participant("JeanFILE@test.fr", "Jean", "FILE", null)
// let participant2 = new Participant("JackHOST@test.fr", "Jack", "HOST", null)
// let participant3 = new Participant("AnnaCONDA@test.fr", "Anna", "CONDA", null)
// let participant4 = new Participant("SarahCROCHE@test.fr", "Sarah", "CROCHE", null)
// let participant5 = new Participant("SachaTOUILLE@test.fr", "Sacha", "TOUILLE", null)

// let participants_shuffle = []
// participants_shuffle.push(participant1, participant2, participant3, participant4, participant5)

// let participants_no_shuffle = []
// participants_no_shuffle.push(participant1, participant2, participant3, participant4, participant5)

// shuffleArray(participants_shuffle)
// let i = 0

// let tab_personne_deja_associee = []

// for(let participant of participants_shuffle){
//     i = 0
//     //for(let personne_deja_associee of tab_personne_deja_associee){
//         if((participant != participants_no_shuffle[i]) /*&& (participant != personne_deja_associee)*/){
//             do{
//                 participant.personne_associee = participants_no_shuffle[i]
//                 i++;
//             }while(participant.personne_associee == null)
//         }
//     //}
// }
// console.log(participants_shuffle)

const btG = document.getElementById("testG")
const btT = document.getElementById("testT")

btT.addEventListener("click", () => {


    let participant1 = new Participant("JeanFILE@test.fr", "Jean", "FILE", null)
    let participant2 = new Participant("JackHOST@test.fr", "Jack", "HOST", null)
    let participant3 = new Participant("AnnaCONDA@test.fr", "Anna", "CONDA", null)
    let participant4 = new Participant("SarahCROCHE@test.fr", "Sarah", "CROCHE", null)
    let participant5 = new Participant("SachaTOUILLE@test.fr", "Sacha", "TOUILLE", null)

    let participants_shuffle = []
    participants_shuffle.push(participant1, participant2, participant3, participant4, participant5)

    let participants_no_shuffle = []
    participants_no_shuffle.push(participant1, participant2, participant3, participant4, participant5)

    shuffleArray(participants_shuffle)
    let i = 0

    let tab_personne_deja_associee = []

    for(let participant of participants_no_shuffle){
    i = 0
        do{
            if(participant != participants_shuffle[i]){
                if(!(tab_personne_deja_associee.indexOf(participants_shuffle[i]) !== -1)){
                    participant.personne_associee = participants_shuffle[i]
                    tab_personne_deja_associee.push(participants_shuffle[i])
                }
            }
            i++;
        }while(participant.personne_associee == null && i<=20)
    }
    console.log(participants_shuffle)
})









btG.addEventListener("click", () => {
    
    let participant1 = new Participant("JeanFILE@test.fr", "Jean", "FILE", null)
    let participant2 = new Participant("JackHOST@test.fr", "Jack", "HOST", null)
    let participant3 = new Participant("AnnaCONDA@test.fr", "Anna", "CONDA", null)
    let participant4 = new Participant("SarahCROCHE@test.fr", "Sarah", "CROCHE", null)
    let participant5 = new Participant("SachaTOUILLE@test.fr", "Sacha", "TOUILLE", null)
    
    let participants_shuffle = []
    participants_shuffle.push(participant1, participant2, participant3, participant4, participant5)
    
    let participants_no_shuffle = []
    participants_no_shuffle.push(participant1, participant2, participant3, participant4, participant5)
    
   shuffleArray(participants_shuffle)

    let y=0

    // while (y<5 )
    // {
       
    //     if(participants_shuffle[y] != participants_no_shuffle[y]){
    //         console.log(participants_shuffle[y])
    //         console.log(participants_no_shuffle[y])  
           
    //       //participant.personne_associee = participants_no_shuffle[y]
    //       // console.log("oui")
    //       y++
            
    //     }
    //     else
    //     {
    //         console.log("error")
    //         //
    //         shuffleArray(participants_shuffle)
    //         y=0
            
    //     }
       
       
    // }
    
    
    


})









