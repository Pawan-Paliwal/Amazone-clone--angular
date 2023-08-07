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
    BeautyItemComponent
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
