import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  DestinationGridComponent,
} from './destination/destination-grid/destination-grid.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, DestinationGridComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Workcation Clone';
}
