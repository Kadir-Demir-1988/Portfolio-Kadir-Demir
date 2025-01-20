import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  isChecked = false; // Status der Checkbox
  isTouched = false; // Wurde die Checkbox angeklickt?
  userName: string = ''; // Name
  userEmail: string = ''; // E-Mail
  userMessage: string = ''; // Nachricht

  toggleCheckbox() {
    this.isChecked = !this.isChecked; // Zustand umkehren
    this.isTouched = true; // Checkbox wurde berührt
    console.log('Checkbox toggled:', this.isChecked); // Debug-Ausgabe
  }

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form submitted:', form.value);
      alert('Your message has been sent!');
      form.resetForm(); // Formular zurücksetzen
      this.isChecked = false; // Checkbox zurücksetzen
    }
  }
}
