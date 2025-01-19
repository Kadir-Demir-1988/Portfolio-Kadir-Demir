import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, HomeComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
