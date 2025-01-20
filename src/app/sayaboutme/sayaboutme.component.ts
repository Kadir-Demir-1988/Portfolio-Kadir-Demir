import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sayaboutme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sayaboutme.component.html',
  styleUrl: './sayaboutme.component.scss',
})
export class SayaboutmeComponent {
  testimonials = [
    {
      quote:
        'Kadir has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project. He always took the time to share his knowledge and ensure that everyone was on the same page. His ability to stay calm under pressure made him a valuable asset to our team.',
      author: 'H. Yashar - Team Partner',
    },
    {
      quote:
        'I had the good fortune of working with Kadir. His effort and knowledge were essential for our success. He always showed a high level of commitment and a willingness to tackle even the most challenging tasks. His positivity and determination made the working atmosphere truly enjoyable.',
      author: 'L. Nolting - Frontend Developer',
    },
    {
      quote:
        "Kadir's efficient way of working inspired the whole team. His dedication was amazing! He constantly brought new ideas and solutions to the table, which helped us overcome obstacles. His ability to adapt to new situations quickly and effectively really stood out.",
      author: 'S. Kalin - Team Partner',
    },
  ];

  currentIndex = 0;
  isSlidingIn = false;
  isSlidingOut = false;

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
          ? (this.currentIndex + 1) % this.testimonials.length
          : (this.currentIndex - 1 + this.testimonials.length) %
            this.testimonials.length;

      this.isSlidingOut = false;
      this.isSlidingIn = true;
      setTimeout(() => {
        this.isSlidingIn = false;
      }, 500);
    }, 500);
  }
}
