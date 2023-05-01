export class Foods{
    id!:string;  //In angular 13 if we have to define anything or if we have to define any data type we need to create constucto.So we dont create constructor instead of that we use !mark.
    price!:number;
    name!:string;
    favorite:boolean=false; //fav is two type true or false
    stars:number = 0; //when we assign value then we dont need ! mark.
    tags?:string[]; //tag is in array
    imageUrl!: string;
    cookTime!: string;
    origins!: string[]; //origins is multiple place thats why we used array

}

