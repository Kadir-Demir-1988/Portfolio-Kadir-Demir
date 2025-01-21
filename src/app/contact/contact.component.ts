import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  currentLanguage = 'en';
  isChecked = false;
  isTouched = false;
  userName: string = '';
  userEmail: string = '';
  userMessage: string = '';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    this.isTouched = true;
    console.log('Checkbox toggled:', this.isChecked);
  }

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form submitted:', form.value);
      alert('Your message has been sent!');
      form.resetForm();
      this.isChecked = false;
    }
  }
}
