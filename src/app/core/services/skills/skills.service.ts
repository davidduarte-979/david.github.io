import { Injectable } from '@angular/core';
import { Skill } from '../../models/skills';
import { TechCategory } from '@core/models/tech-category.enum';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private startYear = new Date('01/01/2017');
  overAllYearsOfExperience = this.getOverAllYearsOfExperience();
  private skills: Skill[] = [
    {
      name: 'Angular',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'My expertise lies in leveraging Angular\'s powerful features such as component-based architecture, dependency injection, and reactive programming using RxJS. I have successfully built and maintained large-scale applications, utilizing Angular\'s comprehensive tooling and development ecosystem.',
      category: TechCategory.Frontend
    },
    {
      name: 'React',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'I possess extensive expertise in React, a popular JavaScript library for building user interfaces. With several years of experience, I have developed a deep understanding of React\'s core concepts, component-based architecture, and its robust ecosystem.',
      category: TechCategory.Frontend
    },
    {
      name: 'Node.js',
      knowledge: 80,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'in Node.js, I have established a strong foundation in server-side JavaScript development. I possess in-depth knowledge and expertise in leveraging Node.js to build scalable and high-performance web applications.',
      category: TechCategory.Backend
    },
    {
      name: 'Css',
      knowledge: 60,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'With a strong command over CSS (Cascading Style Sheets), I possess the skills to create visually appealing and engaging user interfaces. I have developed expertise in leveraging CSS to style and layout web pages with precision and creativity.',
      category: TechCategory.Frontend
    },
    {
      name: 'MondoDB',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'With expertise in MongoDB, I possess a strong understanding of this NoSQL database technology and its application in modern web development. I have successfully utilized MongoDB to build scalable and flexible data storage solutions.',
      category: TechCategory.Database
      
    },
    {
      name: 'Typescript',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'I am skilled in leveraging TypeScript\'s powerful tooling and language features to facilitate efficient development workflows. I am proficient in utilizing TypeScript\'s transpilation process to convert TypeScript code into JavaScript that runs on different platforms and browsers.',
      category: TechCategory.Frontend
      
    },
    {
      name: 'Tailwind',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'My proficiency in Tailwind CSS lies in its unique approach of using utility classes to style and design web interfaces. I am skilled in leveraging Tailwind CSS\'s extensive collection of utility classes to rapidly prototype and build user interfaces with minimal custom CSS.',
      category: TechCategory.Frontend
      
    },
    {
      name: 'Nest.js',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'Nest.js combines the best practices of object-oriented programming, functional programming, and the modular architecture of frameworks like Angular. I am skilled in leveraging Nest.js\'s features, such as decorators, dependency injection, and decorators, to create highly organized and testable code.',
      category: TechCategory.Backend
      
    },
    {
      name: 'AWS',
      knowledge: 50,
      // proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'I am proficient in utilizing AWS core services, including Amazon EC2 for virtual server provisioning, Amazon S3 for scalable object storage, and Amazon RDS for managed relational databases. I have experience in leveraging these services to build highly available and fault-tolerant architectures.',
      category: TechCategory.Cloud
      
    },
    {
      name: 'Express',
      knowledge: 100,
      proficient: true,
      logo: 'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'I am skilled in building RESTful APIs using Express.js, adhering to best practices for resource naming, HTTP methods, and status codes. I can effectively handle data validation, input sanitization, and response formatting to ensure the integrity and security of the API.',
      category: TechCategory.Backend
      
    },
    {
      name: 'Javascript',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'With expertise in JavaScript, I bring a strong understanding of this versatile programming language to my web development projects. With 8 years of experience, I have successfully utilized JavaScript to build dynamic and interactive web applications.',
      category: TechCategory.Frontend
      
    },
    {
      name: 'MySql',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'With expertise in MySQL, I possess a strong understanding of this popular open-source relational database management system. With [X] years of experience, I have successfully utilized MySQL to design, develop, and maintain efficient and reliable databases for various web applications.',
      category: TechCategory.Database
      
    },
    {
      name: 'PostgreSQL',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'I am proficient in creating and optimizing database schemas, tables, and indexes using PostgreSQL\'s SQL (Structured Query Language). I have a deep understanding of SQL syntax, enabling me to write complex queries, joins, and subqueries to retrieve and manipulate data effectively.',
      category: TechCategory.Database
      
    },
    {
      name: 'C#',
      knowledge: 50,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-line.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'C# is a powerful and modern object-oriented language that is widely used in the development of desktop, web, and mobile applications. I am proficient in leveraging C#\'s features such as strong typing, automatic memory management, and extensive standard libraries to write clean, maintainable, and efficient code.',
      category: TechCategory.Backend
      
    },
    {
      name: 'Git',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'With expertise in Git, I possess a strong understanding of this distributed version control system, which is widely used in software development projects.',
      category: TechCategory.Frontend
      
    },
    {
      name: '.Net Core',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'With expertise in .NET Core, I possess a strong understanding of this powerful and cross-platform framework for building modern web, desktop, and cloud applications.  I have successfully utilized .NET Core to develop scalable, high-performance, and maintainable software solutions.',
      category: TechCategory.Backend
      
    },
    {
      name: 'Jasmine',
      knowledge: 60,
      // proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'With expertise in Jasmine, I possess a strong understanding of this popular JavaScript testing framework used for behavior-driven development (BDD) and unit testing.',
      category: TechCategory.TestingFramework
      
    },
    {
      name: 'Jest',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'With expertise in Jest, I possess a strong understanding of this popular JavaScript testing framework used for unit testing, integration testing, and snapshot testing.',
      category: TechCategory.TestingFramework
      
    },
    {
      name: 'HTML',
      knowledge: 100,
      proficient: true,
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
      yearsOfExperience: this.overAllYearsOfExperience,
      description: 'I am well-versed in utilizing HTML best practices for accessibility, including providing alternative text for images, using semantic tags, and structuring content to be screen reader-friendly. ',
      category: TechCategory.Frontend
    },
  ];

  getAllSkills(): Skill[] {
    return this.skills;
  }

  getOverAllYearsOfExperience() {
  let diff =(new Date().getTime() - this.startYear.getTime()) / 1000;
   diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff/365.25));
  }
}
