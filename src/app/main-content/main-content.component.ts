import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { SkillsetComponent } from '../skillset/skillset.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SayaboutmeComponent } from '../sayaboutme/sayaboutme.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HomeComponent,
    AboutmeComponent,
    SkillsetComponent,
    ProjectsComponent,
    SayaboutmeComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
