import { Component, OnInit, inject } from '@angular/core';
import { Skill } from '@core/models/skills';
import { TechCategory } from '@core/models/tech-category.enum';
import { TechStack } from '@core/models/tech-stack';
import { AboutService } from '@core/services/about.service';
import { FileDownloadsService } from '@core/services/file-downloads.service';
import { SkillsService } from '@core/services/skills/skills.service';

@Component({
  selector: 'portfolio-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private downloadsServices = inject(FileDownloadsService);
  private skillServices = inject(SkillsService);
  private aboutService = inject(AboutService);
  techStack: TechStack[];
  skills: Skill[];
  techCategoryEnum = TechCategory;

  constructor() { }

  ngOnInit(): void {
    this.skills = this.skillServices.getAllSkills();
    this.techStack = this.aboutService.getTechStack();
  }

  downloadResumen(): void {
    this.downloadsServices.download('/assets/doc/davidResumen.pdf')
      .subscribe(blob => {
        const a = document.createElement('a')
        const objectUrl = URL.createObjectURL(blob)
        a.href = objectUrl
        a.download = 'JesusDuarteResumen.pdf';
        a.click();
        URL.revokeObjectURL(objectUrl);
      });
  }

}
