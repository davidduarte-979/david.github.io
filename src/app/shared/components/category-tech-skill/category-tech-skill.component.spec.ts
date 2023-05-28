import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTechSkillComponent } from './category-tech-skill.component';

describe('CategoryTechSkillComponent', () => {
  let component: CategoryTechSkillComponent;
  let fixture: ComponentFixture<CategoryTechSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryTechSkillComponent]
    });
    fixture = TestBed.createComponent(CategoryTechSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
