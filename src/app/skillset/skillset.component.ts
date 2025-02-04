import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss',
})
export class SkillsetComponent {
  skills = [
    { svg: 'assets/img/skillsymbol/HTML.svg', label: 'HTML' },
    { svg: 'assets/img/skillsymbol/CSS.svg', label: 'CSS' },
    { svg: 'assets/img/skillsymbol/JavaScript.svg', label: 'JavaScript' },
    {
      svg: 'assets/img/skillsymbol/MaterialDesign.svg',
      label: 'Material Design',
    },
    { svg: 'assets/img/skillsymbol/TypeScript.svg', label: 'TypeScript' },
    { svg: 'assets/img/skillsymbol/Angular.svg', label: 'Angular' },
    { svg: 'assets/img/skillsymbol/Firebase.svg', label: 'Firebase' },
    { svg: 'assets/img/skillsymbol/GIT.svg', label: 'GIT' },
    { svg: 'assets/img/skillsymbol/Rest-Api.svg', label: 'Rest-API' },
    { svg: 'assets/img/skillsymbol/Scrum.svg', label: 'Scrum' },
    {
      svg: 'assets/img/skillsymbol/GrowthMindset.svg',
      label: 'Growth Mindset',
    },
  ];

  isHovered = false;

  onHover(isLast: boolean) {
    if (isLast) {
      this.isHovered = true;
    }
  }

  onLeave(isLast: boolean) {
    if (isLast) {
      this.isHovered = false;
    }
  }

  scrollToContact() {
    document
      .getElementById('contactme')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}
