import { Component, OnInit, inject } from '@angular/core';
import { MaterialsModule } from '../../shared/materials/materials.module';
import { AuthService } from '@auth0/auth0-angular';

import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  private readonly auth = inject(AuthService)
  private readonly router = inject(Router)
  loginRedirect(){
    this.auth.loginWithRedirect().subscribe(value => console.log(value)
    )
  }

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe(
     {next:(res)=>{if(res){
       this.router.navigate(['/galeries'])
     }}}
     )
  }
}
