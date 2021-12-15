import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { ProductService } from './product.service';
import {Product} from './product';
import { LoggerService } from './logger.service';
import { StudentComponent } from './student/student/student.component';
import { RestService } from './rest.service';
import { Rest1Service } from './rest1.service';
import { User } from './User';
import { policyHolder } from './policyHolder';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  insuranceColumns=["Insurance Policy No","Policy Holders Name","Policy Amount","Amount for EMI","Nominees name","Actions"];
  
}