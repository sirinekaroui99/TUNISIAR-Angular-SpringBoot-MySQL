import { Component } from '@angular/core';
import { UserService } from '../services/service-user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  email: string;
  password: string;
  myForm: any; 
  token: any;
  Id: any;
  result: any;
  response: string;

  constructor(private formBuilder: FormBuilder, private userservice: UserService, private router: Router) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }



  loginUser() { 
    
    console.log('email', this.email);
    let data = {
      email: this.email,
      password: this.password
    };
  
    console.log('login data', data);
    this.userservice.loginuser(data).subscribe(
      (data: string) => {
        this.response = data;
        console.log(this.response); // Afficher la chaîne de caractères
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de l\'envoi des données :', error);
      }
    );
  }
  
}
