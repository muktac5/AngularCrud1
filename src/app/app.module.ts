import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LowerupperPipe } from './pipes/lowerupper.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { TempConverterPipe } from './pipes/temp-converter.pipe';
import { LoggerService } from './logger.service';
import { HttpClientModule } from '@angular/common/http';
import { InsurancepolicyholdersComponent } from './insurancepolicyholders/insurancepolicyholders.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LowerupperPipe,
    FilterPipe,
    TempConverterPipe,
    InsurancepolicyholdersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
