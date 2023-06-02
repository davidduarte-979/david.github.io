import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ErrorValidationMesasageComponent } from './error-validation-mesasage.component';

describe('DisplayValidationErrorComponent', () => {
  let component: ErrorValidationMesasageComponent;
  let fixture: ComponentFixture<ErrorValidationMesasageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorValidationMesasageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorValidationMesasageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const testValidationError = (control: FormControl, name: string, customMessage: string, resultText: string) => {
    it(`controls should display ${resultText}`, (done) => {
      component.control = control;
      component.name = name;
      component.customMessage = customMessage
      component.control.markAsDirty();

      fixture.detectChanges();

      fixture.whenRenderingDone().then(() => {
        const debugElement = fixture.debugElement.query(By.css('#validationError'))
        expect(debugElement.nativeElement.innerText).toEqual(resultText);
        done();
      })

    })
  }

  testValidationError(new FormControl<string>(null, Validators.required), 'Field Name', null, 'Field Name is required.')

  testValidationError(new FormControl<string>(null, [Validators.required, Validators.minLength(4)]), 'Field Name', null, 'Field Name is required.')

  testValidationError(new FormControl<string>('123', [Validators.required, Validators.minLength(4)]), 'Field Name', null, 'Field Name minimum length is 4')

  testValidationError(new FormControl<string>('12345', [Validators.required, Validators.maxLength(4)]), 'Field Name', 'This is a custom message', 'This is a custom message')
});
