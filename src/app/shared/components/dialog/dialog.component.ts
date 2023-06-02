import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogType } from '@core/models/dialog.enum';
import { DialogData } from '@core/models/dialog.type';

@Component({
  selector: 'portfolio-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  dialogType = DialogType;
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
