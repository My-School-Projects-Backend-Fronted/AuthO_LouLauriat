import { Component, inject } from '@angular/core';
import { MaterialsModule } from '../../shared/materials/materials.module';
import { AuthService, LogoutOptions } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MaterialsModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  private readonly auth = inject(AuthService)
  private readonly document = inject(DOCUMENT)
  logoutRedirect(){
    this.auth.logout({
      returnTo: this.document.location.origin,
    } as LogoutOptions);
  }
}
