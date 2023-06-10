import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TechStack } from '@core/models/tech-stack';
import { map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SkillsService } from './skills/skills.service';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private http = inject(HttpClient);
  private skills = inject(SkillsService)
  // private techStack: TechStack[] = [
  //   {
  //     categoryTitle: 'Frontend Developer',
  //     techCategoryEnum: TechCategory.Frontend,
  //     imgUrl: 'assets/img/typescript.png',
  //     description: 'As a Frontend Senior Developer with expertise in Angular and React, I bring a wealth of knowledge and hands-on experience in developing modern and intuitive web applications. I am committed to delivering high-quality code, following industry best practices, and creating exceptional user interfaces that leave a lasting impact.',
  //     rtl: false
  //   },
  //   {
  //     categoryTitle: 'Backend Developer',
  //     techCategoryEnum: TechCategory.Backend,
  //     imgUrl: 'assets/img/node.png',
  //     description: 'As a Backend Senior Developer, I bring a wealth of knowledge and hands-on experience in designing and building scalable, performant, and secure server-side applications. I am dedicated to delivering high-quality code, following best practices, and leveraging the latest technologies to create reliable and efficient backend systems.',
  //     rtl: true
  //   },
  //   {
  //     categoryTitle: 'Databases',
  //     techCategoryEnum: TechCategory.Database,
  //     imgUrl: 'assets/img/sql.png',
  //     description: 'I am proficient in working with a variety of database technologies, including both SQL-based (such as  MySQL, PostgreSQL) and NoSQL-based (such as MongoDB) systems. I have a solid understanding of data modeling principles, normalization, and denormalization techniques, enabling me to design efficient and well-structured database schemas.',
  //     rtl: false
  //   },
  //   {
  //     categoryTitle: 'Testing Developer',
  //     techCategoryEnum: TechCategory.TestingFramework,
  //     imgUrl: 'assets/img/testing.png',
  //     description: 'I have a strong understanding of different testing types, including functional testing, regression testing, integration testing, and user acceptance testing. I am skilled in identifying and prioritizing test cases based on risk analysis and requirements, ensuring maximum test coverage.',
  //     rtl: true
  //   },
  //   {
  //     categoryTitle: 'Cloud Developer',
  //     techCategoryEnum: TechCategory.Cloud,
  //     imgUrl: 'assets/img/aws.png',
  //     description: 'I am proficient in working with major cloud platforms such as AWS. I have a solid understanding of cloud services, including compute, storage, networking, databases, and serverless architectures. I am skilled in leveraging cloud infrastructure-as-a-service (IaaS), platform-as-a-service (PaaS), and software-as-a-service (SaaS) offerings to build scalable and resilient applications.',
  //     rtl: false
  //   },
  // ]

  // getTechStack() {
  //   return this.techStack;
  // }

  getTechStackAsync() {
    return this.skills.getSkillAsync()
      .pipe(switchMap((skills) => {
        return this.http.get<TechStack[]>(`${environment.API_BASE_URL}/${environment.API_VERSION}/tech-category`)
          .pipe(map((TechCategory) => {
            return TechCategory.map(element => ({ ...element, skills }))
          }))
      }))
  }
}
