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

@NgModule({
  declarations: [
    AppComponent,
    PreheaderComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    IframeComponent,
    BodyAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
