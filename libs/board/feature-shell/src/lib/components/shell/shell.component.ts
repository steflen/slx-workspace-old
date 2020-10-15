import { Component } from '@angular/core';
import { Tile } from '@slx/board-domain';

@Component({
  selector: 'slx-board-feature-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class BoardFeatureShellComponent {
  gridRows = 3;
  gridColumns = 3;

  tiles: Array<Tile> = [
    { id: '0001', position: 1, row: 0, column: 0 },
    { id: '0002', position: 2, row: 0, column: 1 },
    { id: '0003', position: 3, row: 0, column: 2 },
    { id: '0004', position: 4, row: 1, column: 0 },
    { id: '0005', position: 5, row: 1, column: 1 },
    { id: '0006', position: 6, row: 1, column: 2 },
    { id: '0007', position: 7, row: 2, column: 0 },
    { id: '0008', position: 8, row: 2, column: 1 },
    { id: '0009', position: 9, row: 2, column: 2 },
    { id: '0010', position: 10, row: 3, column: 0 },
    { id: '0011', position: 11, row: 3, column: 1 },
    { id: '0012', position: 12, row: 4, column: 2 },
    { id: '0013', position: 13, row: 5, column: 0 },
    { id: '0014', position: 14, row: 5, column: 1 },
    { id: '0015', position: 15, row: 5, column: 2 },
  ];

  onTileClicked(tile: Tile) {
    console.log('tile clicked', tile);
    // this.tileFacade.selectTileByParams(tile.......);
  }

  onTileHovered(tile: Tile) {
    console.log('tile hovered', tile);
    // this.tileFacade.selectTileByParams(tile.......);
  }
}
