import { Component, OnInit, inject } from '@angular/core';
import { User } from '@core/models/user';
import { DataSourceService } from '@core/services/data-source.service';
import { DialogService } from '@core/services/dialog.service';
import { UsersService } from '@core/services/users.service';
import { DialogType } from '@core/models/dialog.enum';

@Component({
  selector: 'portfolio-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private userServices = inject(UsersService);
  public dataSource = inject(DataSourceService);
  public dialogService = inject(DialogService);
  private dialogEnumType = DialogType;

  displayedColumns: string[] = [
    'id',
    'email',
    'displayName',
    'firstname',
    'lastname',
    'isEmailVerify',
    'role',
    'createdAt',
    'actions'
  ];

  ngOnInit(): void {
    this.userServices.getUsers().subscribe((users) => {
      this.dataSource.init(users)
    })
  }

  onDeleteUser(user: User) {
    this.userServices.deleteUser(user.id)
      .subscribe((users) => {
        this.dataSource.init(users)
        this.dialogService.openDialog(this.dialogEnumType.Success, {
          message: `User ${user.displayName} was successfully deleted.`,
        });
      })
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
  }

}
