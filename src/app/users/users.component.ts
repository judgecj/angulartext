import { Component,OnInit ,ViewChild} from '@angular/core';
import { UsersService  } from '../Service/users.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  implements OnInit {

  
  public value:any
  public users :any;
  public article :any ;
  public date :any
  public loading 
  public errorMessage:any
  public username: any;
  public email: any;

  title = 'AngularForms';
  defaultCountry = 'india';

 


  constructor(public usersService: UsersService,private router: Router ) { 
    this.loading = false 
  }

  
   

  ngOnInit() {
    
    this.usersService.getUsers().subscribe((response)=>{                  
            this.users = response;
       });

  }



  @ViewChild('myForm') form: any

  onSubmit(){
    console.log(this.form.value.username);
  
    this.router.navigate(['/user/', this.form.value.username]);
    this.form.reset();
  }



  
  



}
