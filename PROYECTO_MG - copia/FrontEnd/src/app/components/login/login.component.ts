import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  mensaje:string="";
  usuario:string="";
  password:string="";

  constructor(private fb: FormBuilder,private authService: AuthService,
    private router: Router) {

      this.loginForm = this.fb.group({
        usuario: ['', Validators.required],
        password: ['', Validators.required]
          
      });

     }

  ngOnInit(): void {
  }

  iniciar() {
    const LOGIN: any = {
      nombre: this.loginForm.get('usuario')?.value,
      password: this.loginForm.get('password')?.value      
    }
   
    if(LOGIN.nombre=="" || LOGIN.password==""){

      this.mensaje="Llene todos los campos";

    }else{

      this.authService.loguear(LOGIN).subscribe(res => {
            

        localStorage.setItem('token', res.token);
        this.router.navigate(['/inicio']);
      },
        err => {console.log(err)
        this.mensaje = err.error;    
        this.loginForm.reset();    
        }
      )
      
    }

    
  }
}
