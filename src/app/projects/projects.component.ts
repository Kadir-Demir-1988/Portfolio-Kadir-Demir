import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = PROJECTS;
  currentProjectIndex: number | null = null;
  isTemplateVisible = false;

  constructor(private renderer: Renderer2) {}

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

  openGitHubLink(): void {
    if (this.currentProject?.gitHubUrl) {
      window.open(this.currentProject.gitHubUrl, '_blank');
    } else {
      console.warn('GitHub URL ist nicht verfügbar.');
    }
  }

  openProjectUrl(): void {
    if (this.currentProject?.projectUrl) {
      window.open(this.currentProject.projectUrl, '_blank');
    } else {
      console.warn('Projekt-URL ist nicht verfügbar.');
    }
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
    hoverimageUrl: 'assets/img/projectimg/join.png',
    templateimageUrl: 'assets/img/projectimg/jointemplate.png',
    gitHubUrl: 'https://github.com/A050714/join',
    projectUrl: 'https://join.kadir-demir.de/assets/html_templates/login.html',
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
    hoverimageUrl: 'assets/img/projectimg/elpolloloco.png',
    templateimageUrl: 'assets/img/projectimg/elpollolocotemplate.png',
    gitHubUrl: 'https://github.com/Kadir-Demir-1988/EL_POLLO_LOCO',
    projectUrl: 'https://elpolloloco.kadir-demir.de/',
  },
  {
    id: 3,
    title: 'Pokédex',
    stack: ['HTML', 'CSS', 'JavaScript', 'API'],
    stackimgUrl: [
      'assets/img/projectimg/stackimg/HTML.svg',
      'assets/img/projectimg/stackimg/CSS.svg',
      'assets/img/projectimg/stackimg/Javascript.svg',
    ],
    hoverimageUrl: 'assets/img/projectimg/pokedexvorlage (1).jpg',
    templateimageUrl: 'assets/img/projectimg/pokedexvorlage (1).jpg',
    gitHubUrl: 'https://github.com/Kadir-Demir-1988/Pokedex',
    projectUrl: 'https://pokedex.kadir-demir.de/index.html',
  },
];
