import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SubjectMattersComponent } from './home/subject-matters/subject-matters.component';
import { PartnersComponent } from './home/partners/partners.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SlashDetailsComponent } from './home/slash-details/slash-details.component';
import { CoCreationGroupComponent } from './home/co-creation-group/co-creation-group.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SubjectMattersComponent,
    PartnersComponent,
    FooterComponent,
    SlashDetailsComponent,
    CoCreationGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
