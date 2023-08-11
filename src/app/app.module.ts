import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreheaderComponent } from './preheader/preheader.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { IframeComponent } from './iframe/iframe.component';
import { BodyAllComponent } from './body-all/body-all.component';
import { PhonesComponent } from './phones/phones.component';
import { AppRouting } from './app-routing';
import { PhonesListComponent } from './phones/phones-list/phones-list.component';
import { PhonesDetailComponent } from './phones/phones-detail/phones-detail.component';
import { PhonesItemComponent } from './phones/phones-list/phones-item/phones-item.component';
import { BeautyComponent } from './beauty/beauty.component';
import { BeautyListComponent } from './beauty/beauty-list/beauty-list.component';
import { BeautyDetailComponent } from './beauty/beauty-detail/beauty-detail.component';
import { BeautyItemComponent } from './beauty/beauty-list/beauty-item/beauty-item.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ElectronicsDetailComponent } from './electronics/electronics-detail/electronics-detail.component';
import { ElectronicsListComponent } from './electronics/electronics-list/electronics-list.component';
import { ElectronicsItemComponent } from './electronics/electronics-list/electronics-item/electronics-item.component';
import { MensComponent } from './mens/mens.component';
import { MensListComponent } from './mens/mens-list/mens-list.component';
import { MensItemComponent } from './mens/mens-list/mens-item/mens-item.component';
import { MensDetailComponent } from './mens/mens-detail/mens-detail.component';
import { WomensComponent } from './womens/womens.component';
import { WomensItemComponent } from './womens/womens-list/womens-item/womens-item.component';
import { WomensDetailComponent } from './womens/womens-detail/womens-detail.component';
import { WomensListComponent } from './womens/womens-list/womens-list.component';
import { PersonalComponent } from './personal/personal.component';
import { PersonalDetailComponent } from './personal/personal-detail/personal-detail.component';
import { PersonalListComponent } from './personal/personal-list/personal-list.component';
import { PersonalItemComponent } from './personal/personal-list/personal-item/personal-item.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    PreheaderComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    IframeComponent,
    BodyAllComponent,
    PhonesComponent,
    PhonesListComponent,
    PhonesDetailComponent,
    PhonesItemComponent,
    BeautyComponent,
    BeautyListComponent,
    BeautyDetailComponent,
    BeautyItemComponent,
    ElectronicsComponent,
    ElectronicsDetailComponent,
    ElectronicsListComponent,
    ElectronicsItemComponent,
    MensComponent,
    MensListComponent,
    MensItemComponent,
    MensDetailComponent,
    WomensComponent,
    WomensListComponent,
    WomensItemComponent,
    PersonalComponent,
    PersonalDetailComponent,
    PersonalListComponent,
    PersonalItemComponent,
    CartComponent,
    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
