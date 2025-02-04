import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import AOS from 'aos';

AOS.init();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio-Kadir-Demir';
  currentLanguage = 'en';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((el: any) => {
      const rect = el.getBoundingClientRect();
      if (rect.left < window.innerWidth - 100) {
        el.classList.add('show');
      }
    });
  }
}
