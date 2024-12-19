import { Injectable } from '@angular/core';
import { Card } from '../data/model/card.model';
import { Item } from '../data/model/item.model';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  
  shoopingCard:Card= new Card();


  constructor() { }


  addToCard(item: Item) {
   
    this.shoopingCard.items.push(item);
  }

  removeFromCard() {
    this.shoopingCard.items.pop(); 
  }

  getTotalPrice() {
    return this.shoopingCard.items.reduce((total, item) => total + item.price, 0);
  }

  getItemCounts(){
    return this.shoopingCard.items.length;
  }
}
