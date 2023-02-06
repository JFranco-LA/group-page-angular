import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { MultimediaComponent } from './views/multimedia/multimedia.component';
import { ServicesComponent } from './views/services/services.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'nosotros', component: AboutUsComponent },
  { path: 'servicios', component: ServicesComponent },
  { path: 'multimedia', component: MultimediaComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
