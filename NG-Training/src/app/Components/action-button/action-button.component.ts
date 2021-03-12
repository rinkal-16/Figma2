import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {

  @Output()
  remove: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  addGroup: EventEmitter<void> = new EventEmitter<void>();

  expandedIndex: number | undefined;

  constructor() {
    this.expandedIndex = -1;
  }
  expandRow(index: number): void {
    console.log('sub-tree expandRow: ', index);
    this.expandedIndex = index === this.expandedIndex ? -1 : index;
  }

  ngOnInit(): void {
  }

}
