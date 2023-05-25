import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

signUpForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      fullName : [''],
email : [''],
password : [''],
phoneNumber : ['']
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/signup",this.signUpForm.value)
    .subscribe(res=>{
      alert('SIGNIN SUCCESFUL');
      this.signUpForm.reset()
      this.router.navigate(["login"])
    },err=>{
      alert("Something went wrong")
    })
  }
}
