import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SubjectMattersComponent } from './home/subject-matters/subject-matters.component';
import { PartnersComponent } from './home/partners/partners.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CoCreationGroupComponent } from './home/co-creation-group/co-creation-group.component';

// Import your library
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutComponent } from './about/about.component';
import { SlashDetailsComponent } from './shared/slash-details/slash-details.component';
import { HeaderPageNavComponent } from './shared/header-page-nav/header-page-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SubjectMattersComponent,
    PartnersComponent,
    FooterComponent,
    SlashDetailsComponent,
    CoCreationGroupComponent,
    AboutComponent,
    HeaderPageNavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
