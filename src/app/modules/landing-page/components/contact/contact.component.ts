import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogType } from '@core/models/dialog.enum';
import { DialogService } from '@core/services/dialog.service';

@Component({
  selector: 'portfolio-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  pageForm: FormGroup;
  readonly dialogTypeEnum = DialogType;
  private fb: FormBuilder = inject(FormBuilder);
  private dialogServices = inject(DialogService);
  constructor() {
    this.pageForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.required],
      message: [null, [Validators.required, Validators.maxLength(255)]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.pageForm.invalid) {
      this.pageForm.markAllAsTouched();
      return;
    }
    this.dialogServices.openDialog(this.dialogTypeEnum.Success, { message: 'Thank you. Your submission was success. I\'ll be reaching you out soon!' })
      .afterClosed()
      .subscribe(() => {
        this.pageForm.reset();
      })
    console.log(this.pageForm.value);
  }

}
