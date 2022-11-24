import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WellsComponent } from './wells/wells.component';
import { FormsModule } from '@angular/forms';
import { WellDetailComponent } from './well-detail/well-detail.component';
import { MessagesComponent } from './messages/messages.component'; // <-- NgModel lives here
@NgModule({
  declarations: [
    AppComponent,
    WellsComponent,
    WellDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
