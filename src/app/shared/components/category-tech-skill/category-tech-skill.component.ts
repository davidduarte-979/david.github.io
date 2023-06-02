import { Component, Input } from '@angular/core';
import { Skill } from '@core/models/skills';
import { TechCategory } from '@core/models/tech-category.enum';

@Component({
  selector: 'portfolio-category-tech-skill',
  templateUrl: './category-tech-skill.component.html',
  styleUrls: ['./category-tech-skill.component.scss']
})
export class CategoryTechSkillComponent {
  @Input() cateroryTitle: string;
  @Input() skills: Skill[];
  @Input() techCategoryEnum: TechCategory;
  @Input() imgUrl: string;
  @Input() rtl: boolean = false;

}
