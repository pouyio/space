import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { GatherComponent } from './components/gather/gather.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { EvaluationsComponent } from './components/evaluations/evaluations.component';
import { AuthGuard } from './services/auth-guard.service';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'gather',
    component: GatherComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'gather/:id',
    component: GatherComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'challenges',
    component: ChallengesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'evaluations',
    component: EvaluationsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '',
    redirectTo: '/challenges',
    pathMatch: 'full',
    canActivate: [AuthGuard]
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
