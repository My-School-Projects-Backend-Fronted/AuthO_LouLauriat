import { Component } from '@angular/core';
import { ToolbarComponent } from '../../core/toolbar/toolbar.component';
import { MaterialsModule } from '../../shared/materials/materials.module';

@Component({
  selector: 'app-galeries',
  standalone: true,
  imports: [MaterialsModule ,ToolbarComponent],
  templateUrl: './galeries.component.html',
  styleUrl: './galeries.component.scss'
})
export class GaleriesComponent {

}
