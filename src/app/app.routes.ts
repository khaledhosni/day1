import { Routes } from '@angular/router';
import { UserlistComponent } from './feature/userlist/userlist.component';
import { HomeComponent } from './feature/home/home.component';
import { Page2Component } from './feature/page2/page2.component';
import { Page3Component } from './feature/page3/page3.component';
import { AboutusComponent } from './feature/aboutus/aboutus.component';
import { UserdetailsComponent } from './feature/userdetails/userdetails.component';
import { LoginComponent } from './feature/login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [

    {path:'users',component:UserlistComponent, canActivate:[authGuard]},
    {path:'home',component:HomeComponent, canActivate:[authGuard]},
    {path:'page2',component:Page2Component, canActivate:[authGuard]},
    {path:'page3',component:Page3Component, canActivate:[authGuard]},
    {path:'aboutus',component:AboutusComponent, canActivate:[authGuard]},
    {path:'userdetails',component:UserdetailsComponent, canActivate:[authGuard]},
    {path:'login',component:LoginComponent},

    {path:'**', redirectTo:'login'}

];
