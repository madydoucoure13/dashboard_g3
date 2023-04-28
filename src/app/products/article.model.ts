export class Article{
    id:number;
    imgArticle: string;
    titreArticle: string;
    description: string;
    prixArticle: number;
    createdDate: Date;
    quantiteArticle: number;
    constructor(
        id: number,
        imgArticle: string,
        titreArticle:string,
        description:string,
        prixArticle:number,
        createdDate: Date,
        quantiteArticle:number
    ){
        this.id = id;
        this.imgArticle= imgArticle;
        this.titreArticle = titreArticle;
        this.description= description;
        this.prixArticle = prixArticle;
        this.createdDate = createdDate;
        this.quantiteArticle = quantiteArticle

    }
}