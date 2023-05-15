import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'lib-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnChanges {
  @Input() multiple: boolean = false;
  @Input() items$: Observable<any[]> | any[] = [];
  @Output() selectionChanged = new EventEmitter<any>();

  public items: any[] = [];

  handleItemClick(item: any) {
    if (!this.multiple) {
      // Clear the selection state of all items except the clicked one for single
      this.items.forEach((i) => (i.selected = false));
      item.selected = true;
      this.selectionChanged.emit([item]);
    } else {
      // Handling selected state for multiple mode
      item.selected = !item.selected;
      
      this.selectionChanged.emit(this.items.filter((i) => i.selected));
    }
  }

  async ngOnChanges(changes: SimpleChanges) {
    // On multiple input change reseting selected values
    if (changes['multiple'] && !changes['multiple'].firstChange) {
      this.items.forEach((i) => (i.selected = false));
      this.selectionChanged.emit(this.items.filter((i) => i.selected));
    }
    // Handle items data
    if (changes['items$'] && changes['items$'].currentValue) {
      if (Array.isArray(changes['items$'].currentValue)) {
        // Handle array input
        this.items = changes['items$'].currentValue.map((item) => ({ ...item, selected: false }));
      } else {
        // Handle observable input
        changes['items$'].currentValue.subscribe((data: any[]) => {
          this.items = data.map((item) => ({ ...item, selected: false }));
        });
      }
    }
  }
}
