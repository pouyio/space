import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { GatherComponent } from './components/gather/gather.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { LoginComponent } from './components/login/login.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'gather',
    component: GatherComponent,
  },
  {
    path: 'challenges',
    component: ChallengesComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '',
    redirectTo: '/challenges',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
