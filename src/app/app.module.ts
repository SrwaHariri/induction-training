import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { circleComponent } from './circle/circle.component';
import { triangleComponent } from './triangle/triangle.component';

@NgModule({
  declarations: [
    AppComponent,
    circleComponent,
    triangleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }