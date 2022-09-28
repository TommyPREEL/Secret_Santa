export class Participant{
    email
    nom
    prenom
    personne_associee

    constructor(email, nom, prenom, personne_associee){
        this.email = email;
        this.nom = nom;
        this.prenom = prenom;
        this.personne_associee = personne_associee;
    }
    get email(){
        return this.email
    }
    get nom(){
        return this.nom
    }
    get prenom(){
        return this.prenom
    }
    get personne_associee(){
        return this.personne_associee
    }
    set email(email){
        this.email = email
    }
    set nom(nom){
        this.nom = nom
    }
    set prenom(prenom){
        this.prenom = prenom
    }
    set personne_associee(personne_associee){
        this.personne_associee = personne_associee
    }
}