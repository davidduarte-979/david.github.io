import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogType } from '@core/models/dialog.enum';
import { DialogService } from '@core/services/dialog.service';
import { EmailSenderService } from '@core/services/email-sender.service';

@Component({
  selector: 'portfolio-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isLoading = false;
  readonly dialogTypeEnum = DialogType;
  readonly demograph = {
    city: 'Fort Myers, FL 33919',
    email: 'jduartedsp@gmail.com',
    phone: '+1 (239) 628-9725'
  }

  private fb: FormBuilder = inject(FormBuilder);
  private dialogServices = inject(DialogService);
  private emailSender = inject(EmailSenderService);

  pageForm = this.fb.group({
    firstname: [null, Validators.required],
    lastname: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    phone: [null, Validators.required],
    message: [null, [Validators.required, Validators.maxLength(255)]]
  })


  onSubmit() {
    this.isLoading = true;

    if (this.pageForm.invalid) {
      this.pageForm.markAllAsTouched();
      this.isLoading = false;
      return;
    }

    const body = {
      to: 'jduartedsp@gmail.com',
      data: this.pageForm.value,
      subject: 'David Duarte Portfolio Contact Info'
    }

    this.emailSender.sendEmail(body, 'portfolio-contact-info')
      .subscribe(() => {
        this.isLoading = false;
        this.dialogServices.openDialog(this.dialogTypeEnum.Success, { message: 'Thank you. Your submission was success. I\'ll be reaching you out soon!' })
          .afterClosed()
          .subscribe(() => {
            this.pageForm.reset();
          })
      })
  }

}
