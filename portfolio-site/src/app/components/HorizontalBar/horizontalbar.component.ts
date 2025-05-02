import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './horizontalbar.component.html',
  styleUrl: './horizontalbar.component.scss'
})
export class HorizontalBarComponent {
    @Input() title: string = '';
} 