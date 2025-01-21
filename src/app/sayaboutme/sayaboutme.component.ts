import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sayaboutme',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './sayaboutme.component.html',
  styleUrl: './sayaboutme.component.scss',
})
export class SayaboutmeComponent {
  testimonials: { text: string; author: string }[] = [];
  currentIndex = 0;
  isSlidingIn = false;
  isSlidingOut = false;
  currentLanguage = 'en';

  testimonialKeys = Object.keys({
    0: { text: '', author: '' },
    1: { text: '', author: '' },
    2: { text: '', author: '' },
  });

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  getTranslatedTestimonial(field: 'text' | 'author'): string {
    return this.currentIndex !== null
      ? `testimonials.quote[${this.currentIndex}].${field}`
      : '';
  }

  nextBtn(): void {
    this.triggerSlide('next');
  }

  previousBtn(): void {
    this.triggerSlide('previous');
  }

  goToSlide(index: number): void {
    if (index !== this.currentIndex) {
      this.isSlidingOut = true;
      setTimeout(() => {
        this.currentIndex = index;
        this.isSlidingOut = false;
        this.isSlidingIn = true;
        setTimeout(() => {
          this.isSlidingIn = false;
        }, 500);
      }, 500);
    }
  }

  private triggerSlide(direction: 'next' | 'previous'): void {
    this.isSlidingOut = true;
    setTimeout(() => {
      this.currentIndex =
        direction === 'next'
          ? (this.currentIndex + 1) % this.testimonialKeys.length
          : (this.currentIndex - 1 + this.testimonialKeys.length) %
            this.testimonialKeys.length;

      this.isSlidingOut = false;
      this.isSlidingIn = true;
      setTimeout(() => {
        this.isSlidingIn = false;
      }, 500);
    }, 500);
  }
}
