import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { CoCreationLabComponent } from './co-creation-lab/co-creation-lab.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cocreation-lab', component: CoCreationLabComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  // otherwise redirect to home
  { path: '**', component: PageNotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
