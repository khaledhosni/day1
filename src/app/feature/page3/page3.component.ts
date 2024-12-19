import { Component } from '@angular/core';
import { CardServiceService } from '../../service/card-service.service';
import { Item } from '../../data/model/item.model';

@Component({
  selector: 'app-page3',
  standalone: true,
  imports: [],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {


  constructor(public card:CardServiceService) {}

  removeFromCart() {
     this.card.removeFromCard();
  }
  addToCart() {

    this.card.addToCard(new Item(Math.random()*100,"Item",Math.random()*1000));
  }

}
