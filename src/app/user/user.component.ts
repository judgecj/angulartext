import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from  '../Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public value:any
  public user :any;
  public repos :any
  public article :any ;
  public date :any
  public loading 
  private sub:any;
  public id :any
  // public orderby :any
  

  constructor( public route: ActivatedRoute,public usersService: UserService,private router :Router) { 
    this.loading = false 
  }
   

  

  ngOnInit() {

  
    this.loading = false 
    this.sub = this.route.params.subscribe(params => {
      this.id  = params['id'];

     
          this.usersService.getRepo(this.id).subscribe((response)=>{      
                this.repos =  response
          
           
          },
          err => {
           
            if(err.status  === 404){
              this.router.navigate(['/404',]);
            }
          }
          );
           
          this.usersService.getUser(this.id).subscribe((response)=>{      
            this.user =  response
                
            },  err => {
  
              if(err.status  === 404){
                this.router.navigate(['/404/',]);
              }
           
              // this.toastr.error(err.message);
            } );
          
 
       });
 
 
  }
}
