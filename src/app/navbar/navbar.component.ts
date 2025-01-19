import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  currentLanguage = 'en';
  isHovered = false;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translate.use(this.currentLanguage);
    console.log(`Sprache gewechselt zu: ${this.currentLanguage}`);
  }

  setHover(state: boolean) {
    this.isHovered = state;
  }

  getImageSource(): string {
    if (this.currentLanguage === 'en') {
      return this.isHovered
        ? '/assets/img/translatebtn/translateENhover.svg'
        : '/assets/img/translatebtn/translateEN.svg';
    } else {
      return this.isHovered
        ? '/assets/img/translatebtn/translateDEhover.svg'
        : '/assets/img/translatebtn/translateDE.svg';
    }
  }
}
