import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperContainerComponent } from './wrapper-container.component';

describe('WrapperContainerComponent', () => {
  let component: WrapperContainerComponent;
  let fixture: ComponentFixture<WrapperContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapperContainerComponent]
    });
    fixture = TestBed.createComponent(WrapperContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
