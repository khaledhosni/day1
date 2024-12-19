import { Component } from '@angular/core';
import { CardServiceService } from '../../service/card-service.service';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {

  constructor(public card:CardServiceService) { 

  }
}
