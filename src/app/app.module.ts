import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ServicesComponent } from './views/services/services.component';
import { MultimediaComponent } from './views/multimedia/multimedia.component';
import { ContactComponent } from './views/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenubarComponent,
    AboutUsComponent,
    ServicesComponent,
    MultimediaComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
