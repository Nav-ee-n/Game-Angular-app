import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddgamesComponent } from './addgames/addgames.component';
import { ViewGamesComponent } from './view-games/view-games.component';

@NgModule({
  declarations: [
    AppComponent,
    AddgamesComponent,
    ViewGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
