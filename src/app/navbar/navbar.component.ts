import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isHovered = false;
  isMenuOpen = false;

  constructor(public languageService: LanguageService) {}

  toggleMenu = () => (this.isMenuOpen = !this.isMenuOpen);

  toggleLanguage(): void {
    const newLang = this.languageService.getLanguage() === 'en' ? 'de' : 'en';
    this.languageService.setLanguage(newLang);
    console.log(`Sprache gewechselt zu: ${newLang}`);
  }

  setHover(state: boolean) {
    this.isHovered = state;
  }

  getImageSource(): string {
    return this.languageService.getLanguage() === 'en'
      ? this.isHovered
        ? '/assets/img/translatebtn/translateENhover.svg'
        : '/assets/img/translatebtn/translateEN.svg'
      : this.isHovered
      ? '/assets/img/translatebtn/translateDEhover.svg'
      : '/assets/img/translatebtn/translateDE.svg';
  }
}
