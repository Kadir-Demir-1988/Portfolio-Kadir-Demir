import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../footer/footer.component';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderComponent, TranslateModule, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent implements OnInit {
  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    const lang = this.languageService.getLanguage();
    this.languageService.setLanguage(lang);
  }
}
