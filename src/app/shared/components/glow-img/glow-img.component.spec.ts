import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowImgComponent } from './glow-img.component';

describe('GlowImgComponent', () => {
  let component: GlowImgComponent;
  let fixture: ComponentFixture<GlowImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlowImgComponent]
    });
    fixture = TestBed.createComponent(GlowImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
