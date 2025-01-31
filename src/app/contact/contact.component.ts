import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  currentLanguage = 'en';
  isChecked = false;
  isTouched = false;
  mailTest = false;
  messageSent = false;

  contactData = {
    userName: '',
    userEmail: '',
    userMessage: '',
  };

  http = inject(HttpClient);

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
    if (form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: () => {
            this.messageSent = true;
            form.resetForm();
            this.isChecked = false;
            setTimeout(() => {
              this.messageSent = false;
            }, 3000);
          },
          error: (error) => {
            console.error('Fehler:', error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (form.valid && this.mailTest) {
      alert('Test-Modus: Deine Nachricht wurde nicht gesendet.');
      form.resetForm();
      this.isChecked = false;
    }
  }

  post = {
    endPoint: 'https://kadir-demir.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };
}
