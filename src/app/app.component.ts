import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { HomeComponent } from './feature/home/home.component';
import { MaterialsModule } from './shared/materials/materials.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , HomeComponent,MaterialsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  /**
   *
   */
  // constructor(public auth : AuthService) {


  // }
  private readonly auth = inject(AuthService)
  loginRedirect(){
    this.auth.loginWithRedirect()
  }
}
