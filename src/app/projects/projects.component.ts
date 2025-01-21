import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  currentLanguage = 'en';
  projects = PROJECTS;
  currentProjectIndex: number | null = null;
  isTemplateVisible = false;

  constructor(
    private renderer: Renderer2,
    private translate: TranslateService
  ) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  openProject(index: number) {
    this.currentProjectIndex = index;
    this.isTemplateVisible = true;
    this.disableScroll();
  }

  closeTemplate() {
    this.isTemplateVisible = false;
    this.enableScroll();
    setTimeout(() => {
      this.currentProjectIndex = null;
    }, 500);
  }

  nextProject() {
    if (this.currentProjectIndex !== null) {
      this.currentProjectIndex =
        (this.currentProjectIndex + 1) % this.projects.length;
    }
  }

  disableScroll() {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  enableScroll() {
    this.renderer.removeStyle(document.body, 'overflow');
  }

  get currentProject() {
    return this.currentProjectIndex !== null
      ? this.projects[this.currentProjectIndex]
      : null;
  }

  formatStack(stack: string[]): string {
    return stack
      .map((tech) => `<span class="tech">${tech}</span>`)
      .join('<span class="divider"> | </span>');
  }

  getTranslatedDescription(): string {
    return this.currentProjectIndex !== null
      ? `projectdetails.descriptions[${this.currentProjectIndex}]`
      : '';
  }
}

export const PROJECTS = [
  {
    id: 1,
    title: 'Join',
    stack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    stackimgUrl: [
      'assets/img/projectimg/stackimg/HTML.svg',
      'assets/img/projectimg/stackimg/CSS.svg',
      'assets/img/projectimg/stackimg/Javascript.svg',
      'assets/img/projectimg/stackimg/Firebase.svg',
    ],
    hoverimageUrl: 'assets/img/projectimg/join.svg',
    templateimageUrl: 'assets/img/projectimg/Jointemplate.svg',
    gitHubUrl: '',
    projectUrl: '',
  },
  {
    id: 2,
    title: 'El Pollo Loco',
    stack: ['HTML', 'CSS', 'JavaScript'],
    stackimgUrl: [
      'assets/img/projectimg/stackimg/HTML.svg',
      'assets/img/projectimg/stackimg/CSS.svg',
      'assets/img/projectimg/stackimg/Javascript.svg',
    ],
    hoverimageUrl: 'assets/img/projectimg/elpolloloco.svg',
    templateimageUrl: 'assets/img/projectimg/elpollolocotemplate.svg',
    gitHubUrl: '',
    projectUrl: '',
  },
  {
    id: 3,
    title: 'Da Bubble',
    stack: ['Angular', 'Firebase', 'Typescript'],
    stackimgUrl: [
      'assets/img/projectimg/stackimg/Angular.svg',
      'assets/img/projectimg/stackimg/Firebase.svg',
      'assets/img/projectimg/stackimg/TypeScript.svg',
    ],
    hoverimageUrl: 'assets/img/projectimg/dabubble.svg',
    templateimageUrl: 'assets/img/projectimg/dabubbletemplate.svg',
    gitHubUrl: '',
    projectUrl: '',
  },
];
