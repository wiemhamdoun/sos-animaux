export class User {
    constructor(id_pers="",nom="",prenom="",email="",mdp=""){
this.id_pers = id_pers;
this.nom = nom;
this.prenom=prenom;
this.email=email;
this.mdp=mdp;

    }
    id_pers!: String;
    nom:string | undefined;
    prenom:string | undefined;
    email:string | undefined;
    mdp:string | undefined;

}
