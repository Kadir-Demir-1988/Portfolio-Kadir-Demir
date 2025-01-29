import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderComponent, TranslateModule, FooterComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  currentLanguage = 'en';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
