import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../data/model/user.model';

@Component({
  selector: 'app-userdetails',
  standalone: true,
  imports: [],
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent {

  user: User|null=null; // Replace with actual User model when implemented
  id:number |null=null;
  constructor(private route:ActivatedRoute, private router:Router) {
   
   this.route.queryParams.subscribe(params => {
    //  const user = JSON.parse(params['user']);
    //  console.log(user);  // Output: User object with name, age, etc.
    // this.user = user;

     this.id=params['id'];
    }); 


   let navigation= this.router.getCurrentNavigation();
  //  if (navigation?.extras?.state) {
      const u = navigation?.extras.state as {user:User};
      console.log(u.user);
      this.user=u.user;
  //  }
  }
  



}
