import { ComponentType } from '@angular/cdk/portal';
import { Injectable, inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogType } from '@core/models/dialog.enum';
import { Error } from '@core/models/error';
import { PaginatedResponse } from '@core/models/response-data';
import { DialogComponent } from '@shared/components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialog = inject(MatDialog)
  private dialogRef: MatDialogRef<any>;
  constructor() { }

  openDialog<T, R>(dialogType: DialogType = DialogType.Info, data?: any | Error, component?: ComponentType<T>): void {
    if (component) {
      this.dialogRef = this.dialog.open(component, {
        data: {
          type: dialogType,
          data
        }
      });
    } else {
      this.dialogRef = this.dialog.open(DialogComponent, {
        data: {
          type: dialogType,
          data
        }
      });
    }
  }

  closeDialog(): void {
    this.dialogRef.close()
  }

  getDialogRef() {
    return this.dialogRef;
  }
}
