import { Component, OnInit, inject } from '@angular/core';
import { FileDownloadsService } from '@core/services/file-downloads.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private downloadsServices = inject(FileDownloadsService)

  constructor() { }

  ngOnInit(): void {
  }

  downloadResumen(): void {
    this.downloadsServices.download('/assets/doc/davidResumen.pdf')
      .subscribe(blob => {
        const a = document.createElement('a')
        const objectUrl = URL.createObjectURL(blob)
        a.href = objectUrl
        a.download = 'JesusDuarteResumen.pdf';
        a.click();
        URL.revokeObjectURL(objectUrl);
      });
  }

}
