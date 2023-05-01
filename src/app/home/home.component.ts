import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import{StarRatingComponent}from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Foods[]=[];
  constructor(private fs:FoodService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>
      { 
        if(params['searchItem'])           //In angular 13 if we serach any data with params is gives error if we write directly
         this.foods=this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
        else if( params['tag'])
         this.foods=this.fs.getAllFoodByTag(params['tag'])
         else  
          this.foods=this.fs.getAll(); // get all data from service/getAll fun in foods property

      
        })


  }

}
