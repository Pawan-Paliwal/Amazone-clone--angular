import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonesComponent } from './phones/phones.component';
import { BodyComponent } from './body/body.component';
import { PhonesDetailComponent } from './phones/phones-detail/phones-detail.component';

const router: Routes = [
  {path:'',component:BodyComponent,pathMatch:'full'},
    {path:'phones',component:PhonesComponent},
    {path:'phones/detail',component:PhonesDetailComponent},
    {path:'phones/:id',component:PhonesDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRouting { }
