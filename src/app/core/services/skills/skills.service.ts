import { Injectable } from '@angular/core';
import { Skill } from '../../models/skills';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  skills: Skill[] = [
    {
      name: 'Angular',
      knowledge: 100,
      proficient: true,
    },
    {
      name: 'React',
      knowledge: 100,
      proficient: true,
    },
    {
      name: 'Vue.js',
      knowledge: 80,
    },
    {
      name: 'Svelte',
      knowledge: 60,
    },
    {
      name: 'Node.js',
      knowledge: 100,
      proficient: true,
    },
    {
      name: 'MondoDB',
      knowledge: 100,
      proficient: true,
    },
    {
      name: 'Typescript',
      knowledge: 100,
      proficient: true,
    },
    {
      name: 'Css',
      knowledge: 100,
      proficient: true,
    },
    {
      name: 'Sass',
      knowledge: 100,
      proficient: true,
    },
    {
      name: 'Less',
      knowledge: 50,
      // proficient: true,
    },
    {
      name: 'Stylus',
      knowledge: 50,
      proficient: true,
    },
    {
      name: 'Bootstrap',
      knowledge: 100,
      proficient: true,
    },
    {
      name: 'Materialize',
      knowledge: 100,
      proficient: true,
    },
    {
      name: 'Stack Mean',
      knowledge: 100,
      proficient: true,
    },
    {
      name: 'Stack Mern',
      knowledge: 100,
      proficient: true,
    },
    {
      name: 'Express',
      knowledge: 100,
      proficient: true,
    },
    {
      name: 'Passport',
      knowledge: 100,
      proficient: true,
    },
    {
      name: 'Responsive Design',
      knowledge: 100,
      proficient: true,
    },
    {
      name: 'API Rest',
      knowledge: 100,
      proficient: true,
    },
    {
      name: 'GraphQL',
      knowledge: 80,
      proficient: true,
    },
    {
      name: 'MySql',
      knowledge: 50,
      // proficient: true,
    },
    {
      name: 'Git and Github',
      knowledge: 100,
      proficient: true,
    },
    {
      name: 'JSON',
      knowledge: 100,
      proficient: true,
    },
    {
      name: 'ionic',
      knowledge: 60,
      // proficient: true,
    },
    {
      name: 'Firebase',
      knowledge: 100,
      proficient: true,
    },
  ];
  constructor() {}
}
