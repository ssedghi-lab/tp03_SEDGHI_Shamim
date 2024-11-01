export class Produit {
    id : number;
    nom: string;
    prix: number;
    disponible: boolean;

    constructor(id: number , nom:string , prix:number ,disponible: boolean )
    {
        this.id = id;
        this.nom = nom;
        this.prix = prix; 
        this.disponible = disponible;
    }
}
