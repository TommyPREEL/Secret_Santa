import {Participant} from './participant.js'
import {shuffleArray, mailIsValid, download} from './functions.js'


const btAdd = document.getElementById("add")
const btGenerateSanta = document.getElementById("generate-santa")
const btTestMail = document.getElementById("test-mail")
let nbLine = 0
let tab_participants = []
let tab_personne_deja_associee = []


// Ajouter un participant
btAdd.addEventListener("click", () => {
    const mail = document.getElementById("mail")
    const prenom = document.getElementById("prenom")
    const nom = document.getElementById("nom")
    if(mail.value != "" && prenom.value != "" && nom.value != "" && mailIsValid(mail.value)){
        let participant = new Participant(`${mail.value}`, `${prenom.value}`, `${nom.value}`, null)
        let check_mail = true;
        for(let mail_participant of tab_participants){
            if(mail_participant.email == mail.value){
                check_mail = false;
            }
        }
        if(tab_participants.indexOf(participant == -1) && check_mail == true){
            let d = document.getElementById('div-add');
            let p = document.createElement("div")
            p.setAttribute("id", nbLine)
            p.setAttribute("class", "alert alert-secondary alert-dismissible fade show")
            p.innerText += `${mail.value},${prenom.value},${nom.value}`
            d.appendChild(p)
            tab_participants.push(participant)
            nbLine++
            mail.value = ""
            prenom.value = ""
            nom.value = ""
            let croix = document.createElement("button")
            croix.setAttribute("id", nbLine)
            croix.setAttribute("class", "btn-close")
            croix.addEventListener("click", () => {
                let index_p = tab_participants.indexOf(participant)
                tab_participants.splice(index_p, 1)
                p.remove()
                for(let une_personne of tab_participants){
                    une_personne.personne_associee = null
                }
            })
            p.appendChild(croix)
        }else{
            if(!check_mail){
                alert("Mail déjà utilisée !")
            }

        }
    }
})


// Generer le Santa Secret
btGenerateSanta.addEventListener("click", () => {
    if(tab_participants.length > 1){
        // Suppression des attributions de personnes
        for(let une_personne of tab_participants){
            une_personne.personne_associee = null
        }
        let participants_shuffle = []
        participants_shuffle = [...tab_participants]
    
        let participants_no_shuffle = []
        participants_no_shuffle = [...tab_participants]
    
        tab_personne_deja_associee = []
    
        shuffleArray(participants_shuffle)
        let i = 0
    
        for(let participant of participants_no_shuffle){
        i = 0
            do{
                if(participant != participants_shuffle[i]){
                    if(tab_personne_deja_associee.indexOf(participants_shuffle[i]) === -1){
                        participant.personne_associee = participants_shuffle[i]
                        tab_personne_deja_associee.push(participants_shuffle[i])
                        console.log(participant.nom + " doit faire un cadeau à " + participant.personne_associee.nom)
                    }
                }
                i++;
            }while(participant.personne_associee == null)
        }
        let text_file = ""
        for(let personne of participants_no_shuffle){
            text_file += `${personne.nom} ${personne.prenom} => ${personne.personne_associee.nom} ${personne.personne_associee.prenom}\n`
            //text_spoiler += `${personne.nom} ${personne.prenom} => ${personne.personne_associee.nom} ${personne.personne_associee.prenom}<br>`
        }
        const file = new File([text_file], 'secret_santa.txt', {
            type: 'text/plain',
          })
        let result = confirm("Voulez-vous télécharger le résultat du Santa Secret ?") 
        if(result){
            download(file)
        }

        let div_spoiler = document.getElementById('div-spoiler');
        let spoiler_button = document.createElement("button")
        spoiler_button.setAttribute("class", "btn btn-success")
        spoiler_button.setAttribute("id", "spoiler-button")
        spoiler_button.innerHTML = "Spoiler Résultat"
        div_spoiler.appendChild(spoiler_button)
        //elem_div_spoiler = document.getElementById('spoiler-button'); (eventuellement spoiler_button)
        spoiler_button.addEventListener("click", () =>{
            // Faire afficher le santa secret dans un spoiler
            for(let un_participant of tab_participants){
                let div = document.createElement("div")
                div.setAttribute("class", "alert alert-secondary alert-dismissible fade show")
                div.innerText = `${un_participant.nom} ${un_participant.prenom} => ${un_participant.personne_associee.nom} ${un_participant.personne_associee.prenom}`
                div_spoiler.appendChild(div)
            }
        })
        
    }else{
        alert("Pas assez de participants !")
    }

    
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