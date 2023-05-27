import { TechCategory } from "./tech-category.enum";

export interface Skill {
  name: string;
  knowledge: number;
  proficient?: boolean;
  logo: string;
  yearsOfExperience: number;
  description: string;
  category: TechCategory;
}
