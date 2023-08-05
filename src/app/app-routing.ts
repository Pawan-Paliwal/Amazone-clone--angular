import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonesComponent } from './phones/phones.component';
import { BodyComponent } from './body/body.component';

const router: Routes = [
  {path:'',component:BodyComponent,pathMatch:'full'},
    {path:'phones',component:PhonesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRouting { }
