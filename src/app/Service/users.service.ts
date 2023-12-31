import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Http,  Response, Headers, RequestOptions} from '@angular/http';
// import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })



export class UsersService {
    constructor(private http: HttpClient) { }


    public getUsers(): Observable<any> {
        const url = 'https://api.github.com/users';
        return this.http.get<any>(url);
    }

    public searchUser(enterpost:any):Observable<any>{
        var post = enterpost;
        const url = 'https://api.github.com/users';
        return this.http.get<any>(url);
          

    }
    

  
    
}


