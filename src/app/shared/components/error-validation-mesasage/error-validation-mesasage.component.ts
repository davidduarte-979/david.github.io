import { Component, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-validation-mesasage',
  templateUrl: './error-validation-mesasage.component.html',
  styleUrls: ['./error-validation-mesasage.component.scss']
})
export class ErrorValidationMesasageComponent {
  @Input() control: FormControl | AbstractControl<any,any>
  @Input() name: string;
  @Input() customMessage: string;
}
