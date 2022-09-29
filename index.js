import {Participant} from './participant.js'

const btAdd = document.getElementById("add")
const btT = document.getElementById("testT")
const btGenerateSanta = document.getElementById("generate-santa")
const btTestMail = document.getElementById("test-mail")
let nbLine = 0
let tab_participants = []


// Fonction pour mélanger un tableau
 function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  function mailIsValid(mail){
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,}');
    let check = false;
    if(regex.test(mail)){
        check = true;
    }
    return check
}

/*
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
*/





// const test = document.getElementById("t")
// test.addEventListener("click", () => {
// })






// Ajouter un participant
btAdd.addEventListener("click", () => {
    const mail = document.getElementById("mail")
    const prenom = document.getElementById("prenom")
    const nom = document.getElementById("nom")
    if(mail.value != "" && prenom.value != "" && nom.value != "" && mailIsValid(mail.value)){
        let d = document.getElementById('div-add');
        let p = document.createElement("div")
        p.setAttribute("id", nbLine)
        p.setAttribute("class", "alert alert-secondary alert-dismissible fade show")
        p.innerText += `${mail.value},${prenom.value},${nom.value}`
        d.appendChild(p)
        let participant = new Participant(`${mail.value}`, `${prenom.value}`, `${nom.value}`, null)
        tab_participants.push(participant)
        nbLine++
        mail.value = ""
        prenom.value = ""
        nom.value = ""
        // Creer une croix pour supprimer un participant
        // <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        let croix = document.createElement("button")
        croix.setAttribute("id", nbLine)
        croix.setAttribute("class", "btn-close")
        croix.addEventListener("click", () => {
            p.remove()
            let index = tab_participants.indexOf(participant)
            tab_participants.splice(index, 1)
        })
        p.appendChild(croix)
        console.log(tab_participants)
    }
})


// Generer le Santa Secret
btGenerateSanta.addEventListener("click", () => {

    let participants_shuffle = []
    participants_shuffle = [...tab_participants]

    let participants_no_shuffle = []
    participants_no_shuffle = [...tab_participants]

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
        }while(participant.personne_associee == null && i<=1000)
    }
    console.log(participants_shuffle)
    // Faire afficher le santa secret
})





// // Envoie de mail
// btTestMail.addEventListener("click", () => {
    
//     emailjs.send("service_kjctchl","template_eb32wwl");

//     btTestMail.value = 'Sending...';

//     const serviceID = 'service_kjctchl';
//     const templateID = 'template_eb32wwl';

//     emailjs.sendForm(serviceID, templateID, this)
//         .then(() => {
//             btTestMail.value = 'Send Email';
//         alert('Sent!');
//         }, (err) => {
//             btTestMail.value = 'Send Email';
//         alert(JSON.stringify(err));
//         });
//     })


//         //window.open('mailto:brissetgaspard@gmail.com?subject=test&body=test');

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_eb32wwl';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});