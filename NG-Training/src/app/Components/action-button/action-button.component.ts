import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  @Output()
  expandRows: EventEmitter<void> = new EventEmitter<void>();

  expandedIndex!: number;

  @Input() storeIndex!: string;
  @Input() showMinus!: boolean;

  constructor() {
    this.expandedIndex = -1;
  }

  ngOnInit(): void {
  }

}
