import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../footer/footer.component';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderComponent, TranslateModule, FooterComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent implements OnInit {
  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    const lang = this.languageService.getLanguage();
    this.languageService.setLanguage(lang);
  }
}
