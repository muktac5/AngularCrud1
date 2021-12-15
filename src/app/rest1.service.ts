import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { policyHolder } from './policyHolder';
import {map} from 'rxjs/operators';
import{pipe} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Rest1Service {

  constructor(private http:HttpClient) {}
   
  URL = "http://localhost:3000/policyHolders";

  postPolicyHolders(data:any)
  {
    return this.http.post<any>(this.URL,data);
    pipe(map((res:any)=>{
      return res;
    }))
  }

  updatePolicyHolders(data:any,id:string)
  {
    return this.http.put<any>(this.URL+id,data);
    pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteRecord(iRecord:string):Observable<any>{
    let deleteURL= this.URL+"/"+iRecord;
    console.log("URL : "+deleteURL);
    return this.http.delete(deleteURL);
  }
}
