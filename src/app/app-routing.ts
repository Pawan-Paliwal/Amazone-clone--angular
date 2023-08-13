import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonesComponent } from './phones/phones.component';
import { BodyComponent } from './body/body.component';
import { PhonesDetailComponent } from './phones/phones-detail/phones-detail.component';
import { BeautyComponent } from './beauty/beauty.component';
import { BeautyDetailComponent } from './beauty/beauty-detail/beauty-detail.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ElectronicsDetailComponent } from './electronics/electronics-detail/electronics-detail.component';
import { MensComponent } from './mens/mens.component';
import { MensDetailComponent } from './mens/mens-detail/mens-detail.component';
import { WomensComponent } from './womens/womens.component';
import { WomensDetailComponent } from './womens/womens-detail/womens-detail.component';
import { PersonalComponent } from './personal/personal.component';
import { PersonalDetailComponent } from './personal/personal-detail/personal-detail.component';
import { CartComponent } from './cart/cart.component';
import { AuthComponent } from './auth/auth.component';

const router: Routes = [
  {path:'',component:BodyComponent,pathMatch:'full'},
    {path:'phones',component:PhonesComponent},
    {path:'phones/detail',component:PhonesDetailComponent},
    {path:'phones/:id',component:PhonesDetailComponent},

    {path:'Beauty',component:BeautyComponent},
    {path:'Beauty/detail',component:BeautyDetailComponent},
    {path:'Beauty/:id',component:BeautyDetailComponent},


    {path:'electronics',component:ElectronicsComponent},
    {path:'electronics/detail',component:ElectronicsDetailComponent},
    {path:'electronics/:id',component:ElectronicsDetailComponent},

    {path:'Mens',component:MensComponent},
    {path:'Mens/detail',component:MensDetailComponent},
    {path:'Mens/:id',component:MensDetailComponent},


    {path:'womens',component:WomensComponent},
    {path:'womens/detail',component:WomensDetailComponent},
    {path:'womens/:id',component:WomensDetailComponent},

    {path:'personal',component:PersonalComponent},
    {path:'personal/detail',component:PersonalDetailComponent},
    {path:'personal/:id',component:PersonalDetailComponent},

    {path:'Beauty/search/:searchTerm', component:BeautyComponent},
     {path:'cart-page',component:CartComponent},


     {path:'auth',component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRouting { }
