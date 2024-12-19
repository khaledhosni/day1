import { Component, OnInit } from '@angular/core';
import { User } from '../../data/model/user.model';
import { UserServiceService } from '../../service/user-service.service';
import { NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { Card } from '../../data/model/card.model';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [NgIf,NgFor,HttpClientModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent implements OnInit{


  userList:User[]|null=null;

  isLoading=true;
  constructor(private userService:UserServiceService, private router:Router) {}
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users=>{

      this.userList=users;
      this.isLoading=false;
    });
  }



  handleUserClicked(user: User) {

    let jsonString=JSON.stringify(user);
    this.router.navigate(['userdetails'],{queryParams:{id:user.id}});
  }
    


  handlesendObject(user: User) {

    
    this.router.navigate(['userdetails'],{state:{user}});
    }

}
