import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversionService } from './conversion.service';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ConversionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
