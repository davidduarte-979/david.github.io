import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, inject } from '@angular/core';
import { LoadingService } from '@core/services/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'portfolio-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements AfterViewInit, OnDestroy {
  loadingSubscription: Subscription;
  private loadingService = inject(LoadingService);
  isLoading$ = this.loadingService.loading$;
  constructor(
    private _elmRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef
  ) {

  }

  ngAfterViewInit(): void {
    this.loadingSubscription = this.loadingService.loading$.pipe().subscribe(
      (status: boolean) => {
        this._elmRef.nativeElement.style.display = status ? 'block' : 'none';
        this._changeDetectorRef.detectChanges();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
  }

}
