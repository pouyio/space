import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing';

// NGX-BOOTSTRAP MODULES
import { AlertModule} from 'ngx-bootstrap';

import { ApiService } from './services/api.service';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GatherComponent } from './components/gather/gather.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { ListComponent } from './components/challenges/list/list.component';
import { HistoryComponent } from './components/challenges/history/history.component';
import { QuestsComponent } from './components/challenges/quests/quests.component';
import { PointsComponent } from './components/challenges/points/points.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    AppComponent,
    HomeComponent,
    GatherComponent,
    ChallengesComponent,
    ListComponent,
    HistoryComponent,
    QuestsComponent,
    PointsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
