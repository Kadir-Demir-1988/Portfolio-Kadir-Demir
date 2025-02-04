import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
})
export class AboutmeComponent {
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
