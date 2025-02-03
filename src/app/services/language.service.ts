import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguage = 'en';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.currentLanguage = savedLanguage;
    this.translate.use(this.currentLanguage);
  }

  setLanguage(lang: string) {
    this.currentLanguage = lang;
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

  getLanguage() {
    return this.currentLanguage;
  }
}
