import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(foodId:string):Foods{
    return this.getAll().find(food => food.id == foodId) ?? new Foods();
  }


  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));

    //you cam write this statement is very simple way lets do:this in upper side

    // if(tag=='All')
    // return this.getAll()
    // else
    // return this.getAll().filter(food => food.tags?.includes(tag));

  }
  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }
  getAll(): Foods[] {
    return [
      {
        id: "1",
        name: 'Pizza Pepperoni',
        price: 10,
        cookTime: '40-50',
        favorite: false,
        stars: 3.3,
        imageUrl: '/assets/food12.jpg',
        tags: ['SlowFood', 'Pizza'],
        origins: ['india', 'asia']
      },
      {
        id: '2',
        name: 'Veg Biryani',
        price: 10,
        cookTime: '30-40',
        favorite: true,
        stars: 4.2,
        imageUrl: '/assets/food11.jpg',
        tags: ['SlowFood'],
        origins: ['indian']
      },
      {
        id: "3",
        name: 'Chicken Biryani',
        price: 50,
        cookTime: '40-50',
        favorite: true,
        stars: 4.3,
        imageUrl: '/assets/food13.jpg',
        tags: ['SlowFood', 'Lunch'],
        origins: ['india', 'asia']
      },
      {
        id: "4",
        name: 'Paneer Tikka',
        price: 30,
        cookTime: '40-50',
        favorite: false,
        stars: 3.7,
        imageUrl: '/assets/food14.jpg',
        tags: ['Lunch'],
        origins: ['india', 'asia']
      },
      {
        id: "5",
        name: 'Chicken Fry',
        price: 10,
        cookTime: '40-50',
        favorite: true,
        stars: 5,
        imageUrl: '/assets/food15.jpeg',
        tags: ['SlowFood', 'Fry'],
        origins: ['india', 'asia']
      },
      {
        id: "6",
        name: 'Cold Coffie',
        price: 50,
        cookTime: '40-50',
        favorite: false,
        stars: 5,
        imageUrl: '/assets/food16.jpeg',
        tags: ['FastFood'],
        origins: ['india', 'asia']
      },
      {
        id: "7",
        name: 'Burger',
        price: 60,
        cookTime: '40-50',
        favorite: false,
        stars: 3.3,
        imageUrl: '/assets/food17.jpeg',
        tags: ['FastFood', 'Hamburger'],
        origins: ['india', 'asia']
      },
      {
        id: "8",
        name: 'Salom',
        price: 40,
        cookTime: '40-50',
        favorite: false,
        stars: 4.1,
        imageUrl: '/assets/food9.jpg',
        tags: ['SlowFood'],
        origins: ['india', 'asia']
      },
      // {
      //   id: 9,
      //   name:'Pizza Pepperoni',
      //   price:10,
      //   cookTime:'40-50',
      //   favorite:false,
      //   stars:3.3,
      //   imageUrl: '/assets/food10.jpeg',
      //   tags:['Slowfood','soup'],
      //   origins:['india','asia']
      // },
      // {
      //   id: 10,
      //   name:'Pizza Pepperoni',
      //   price:10,
      //   cookTime:'40-50',
      //   favorite:false,
      //   stars:3.3,
      //   imageUrl: '/assets/img4.jpeg',
      //   tags:['Slowfood','soup'],
      //   origins:['india','asia']
      // },
      // {
      //   id: 11,
      //   name:'Pizza Pepperoni',
      //   price:10,
      //   cookTime:'40-50',
      //   favorite:false,
      //   stars:3.3,
      //   imageUrl: '/assets//img5.jpeg',
      //   tags:['Slowfood','soup'],
      //   origins:['india','asia']
      // }
    ]
  }
}
