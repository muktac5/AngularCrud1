import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  URL = "http://localhost:3000/users";

  getUsers():Observable<any>{
    return this.http.get <User[]>(this.URL);
  }

  insertData(userObj:User):Observable<any>
  {
    let header={'content-type':'application/json'};
    let body= JSON.stringify(userObj);

    console.log("Data to be inserte in the db.json is : "+body);
    return this.http.post(this.URL,body, {'headers':header});
  }

  deleteRecord(iRecord:string):Observable<any>{
    let deleteURL= this.URL+"/"+iRecord;
    console.log("URL : "+deleteURL);
    return this.http.delete(deleteURL);
  }
}
