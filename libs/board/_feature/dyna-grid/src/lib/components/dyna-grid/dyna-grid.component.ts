import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MediaChange } from '@angular/flex-layout/core/typings/media-change';
import { MatGridList } from '@angular/material/grid-list';
import { DynaGridFacade } from '@slx/board-domain';
import { Subscription } from 'rxjs';
import { Tile } from './tile.model';

@Component({
  selector: 'slx-board-feature-dyna-grid',
  templateUrl: './dyna-grid.component.html',
  styleUrls: ['./dyna-grid.component.scss'],
})
export class BoardFeatureDynaGridComponent implements OnInit, OnDestroy {
  @ViewChild('grid', { static: true }) private grid: MatGridList;

  @Input() columCount: number;
  @Input() rowCount: number;
  @Input() tiles: Array<Tile>;

  @Output() tileHovered: EventEmitter<Tile> = new EventEmitter();
  @Output() tileClicked: EventEmitter<Tile> = new EventEmitter();
  // displayCount$: Observable<number> = this.displayFacade.displayCount$;
  // displays$: Observable<number> = this.displayFacade.;
  //
  // constructor(public mediaObserver: MediaObserver,/*private displayFacade: DisplayFacade*/) {
  //     //     this.currentDisplays$ = this.wallFacade.currentDisplays$;
  // }
  watcher$: Subscription;
  activeMediaQuery = '';

  constructor(public mediaObserver: MediaObserver, private dynaGridFacade: DynaGridFacade) {
    this.watcher$ = mediaObserver.asObservable().subscribe((change: MediaChange[]) => {
      console.log(change);
      console.log(this.mediaObserver);
      this.configureLayout();
      // if (this.mediaObserver.isActive('gt-xs')) {
      //   console.log('greater than XS');
      // }
      // if (this.mediaObserver.isActive('gt-sm')) {
      //   console.log('greater than SM');
      // }
      // if (this.mediaObserver.isActive('lt-md')) {
      //   // console.log("less than MD");
      //   this.configureSmall();
      // }
      // if (this.mediaObserver.isActive('lt-lg')) {
      //   console.log('less than LG');
      // }
      // if (this.mediaObserver.isActive('lt-xl')) {
      //   console.log('less than XL');
      // }
    });
  }

  //
  ngOnInit() {
    console.log('XXXXXXXXXXXXXXXXXXx');
    console.log(this.tiles);
    // this.media$.subscribe(change => { this.mediaChanged(change); });
    this.configureLayout();
  }

  ngOnDestroy() {
    this.watcher$.unsubscribe();
  }

  configureLayout(): void {
    //https://stackoverflow.com/questions/48493652/angular-5-mat-grid-list-responsive/55407217#55407217
    if (this.mediaObserver.isActive('xs')) {
      this.grid.gutterSize = '2px';
    } else if (this.mediaObserver.isActive('sm')) {
      this.grid.gutterSize = '5px';
    } else if (this.mediaObserver.isActive('md')) {
      this.grid.gutterSize = '10px';
    } else if (this.mediaObserver.isActive('lg')) {
      this.grid.gutterSize = '15px';
    } else if (this.mediaObserver.isActive('xl')) {
      this.grid.gutterSize = '20px';
    } /*unknown*/ else {
      this.grid.gutterSize = '10px';
    }
  }

  onDisplayHover(e, display) {
    this.tileHovered.emit(display);
  }

  onDisplayClick(e, display) {
    this.tileClicked.emit(display);
  }

  // onClickDisplay();
  //
  // trackByFn(index, item) {
  //     console.log(item.id);
  //
  //     return index; // or item.id
  // }
}
