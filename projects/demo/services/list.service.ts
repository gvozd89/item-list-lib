import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  public onNewItemAdded: EventEmitter<any> = new EventEmitter();
  private data = [
    { "name": "Item 1", "description": "This is item 1" },
    { "name": "Item 2", "description": "This is item 2" },
    { "name": "Item 3", "description": "This is item 3" },
    { "name": "Item 4", "description": "This is item 4" },
    { "name": "Item 5", "description": "This is item 5" },
    { "name": "Item 6", "description": "This is item 6" },
    { "name": "Item 7", "description": "This is item 7" },
  ];

  constructor() { }

  getList(){
    return this.data;
  }

  addItemToList(newItem: { name: string; description: string; }) {
    this.data.push(newItem);
    this.onNewItemAdded.emit(newItem);
  } 
}
