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
import { CoCreationLabComponent } from './co-creation-lab/co-creation-lab.component';
import { Scroll, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

import { filter, map } from 'rxjs/operators';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { ComingSoonComponent } from './errors/coming-soon/coming-soon.component';
import { HttpClientModule } from '@angular/common/http';
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
    CoCreationLabComponent,
    PageNotFoundComponent,
    ComingSoonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router, viewportScroller: ViewportScroller) {
    router.events.pipe(
      filter((e): e is Scroll => e instanceof Scroll)
    ).subscribe(e => {
      if (e.position) {
        // backward navigation
        viewportScroller.scrollToPosition(e.position);
      } else if (e.anchor) {
        // anchor navigation
        viewportScroller.scrollToAnchor(e.anchor);
      } else {
        // forward navigation
        viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
