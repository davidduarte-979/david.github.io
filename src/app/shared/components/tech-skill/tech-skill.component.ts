import { Component, Input } from '@angular/core';
import { Skill } from '@core/models/skills';

@Component({
  selector: 'app-tech-skill',
  templateUrl: './tech-skill.component.html',
  styleUrls: ['./tech-skill.component.scss']
})
export class TechSkillComponent {
  @Input() skill: Skill;
}
