import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/core/models/skills';
import { SkillsService } from '@core/services/skills/skills.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'portfolio-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss'],
})
export class SkillBarComponent implements OnInit {
  skills$: Observable<Skill[]>;
  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.skills$ = this.skillsService.getSkillAsync()
  }
}
