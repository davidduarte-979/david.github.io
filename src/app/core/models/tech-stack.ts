import { Skill } from "./skills";
import { TechCategory } from "./tech-category.enum";

export interface TechStack {
  categoryTitle: string;
  techCategoryEnum: TechCategory;
  imgUrl: string;
  rtl: boolean;
  description: string;
  skills: Skill[]
}