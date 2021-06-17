import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/core/models/skills';
import { SkillsService } from '../../../core/services/skills/skills.service';
@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss'],
})
export class SkillBarComponent implements OnInit {
  skills!: Skill[];
  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skills = this.skillsService.skills;
  }
}
