import { Component, inject } from '@angular/core';
import { LoadingService } from '@core/services/loading.service';

@Component({
  selector: 'portfolio-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  private loadingService = inject(LoadingService);
  isLoading$ = this.loadingService.loading$;
}
