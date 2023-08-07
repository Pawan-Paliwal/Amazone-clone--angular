import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonesComponent } from './phones/phones.component';
import { BodyComponent } from './body/body.component';
import { PhonesDetailComponent } from './phones/phones-detail/phones-detail.component';
import { BeautyComponent } from './beauty/beauty.component';
import { BeautyDetailComponent } from './beauty/beauty-detail/beauty-detail.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ElectronicsDetailComponent } from './electronics/electronics-detail/electronics-detail.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRouting { }
