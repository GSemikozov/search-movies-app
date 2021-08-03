import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../../animations';
import { LoadingService } from '../../store/services/loading.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [ slideInAnimation ]
})
export class NavComponent implements OnInit {
  loading: boolean = false;

  menuItems = [
    {
      link: '/',
      title: 'home',
    },
    {
      link: 'movies',
      title: 'movies',
    },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private _loading: LoadingService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.listenToLoading();
  }

  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
