import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isShow = false;
  svgColor = "#e5e7eb";

  showMenu(){
    this.isShow = true;
  }

  hideMenu(){
    this.isShow = false;
  }
}
