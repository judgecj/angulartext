import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Http,  Response, Headers, RequestOptions} from '@angular/http';
// import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })



export class UserService {
    constructor(private http: HttpClient) { }


   

    public getUser(id:any): Observable<any> {
        const url = `https://api.github.com/users/${id}`;
        return this.http.get<any>(url)
        
    }
    
    public getRepo(id:any): Observable<any> {
        const url = `https://api.github.com/users/${id}/repos?page=1`;
        return this.http.get<any>(url);
    }
 
    

    // addrequest(enterpost){
    //     var post = enterpost;
    //     var headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     return this.http.post('https://blogend.herokuapp.com/api/requests/new', { "name": post.name,"body": post.body, "email": post.email  });
      
    //    }
    
}


