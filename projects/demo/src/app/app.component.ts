import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListService } from 'projects/demo/services/list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public data: any[] = [];
  public multiple: boolean = false;
  public newItemName: string = '';
  public newItemDescription: string = '';
  public selectionPanelState = false;
  public addItemPanelState = false;
  public selectedItems: any[] = [];
  public scrolled: boolean = false;
  private listItemChangedSubscription: Subscription;

  constructor(
    private listService: ListService
    ) {}

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.scrolled = window.pageYOffset !== 0;
    });
    this.data = this.listService.getList();

    this.listItemChangedSubscription = this.listService.onNewItemAdded.subscribe((data) => {
      this.data = [...this.listService.getList()];
    })
  }

  public handleSelectionChanged(selectedItems: any) {
    this.selectedItems = selectedItems;
  }

  public addItem() {
    if (this.newItemName === '' || this.newItemDescription === '') return;
    const newItem = { name: this.newItemName, description: this.newItemDescription };
    this.listService.addItemToList(newItem);
    this.newItemName = '';
    this.newItemDescription = '';
  }

  ngOnDestroy() {
    this.listItemChangedSubscription.unsubscribe();
  }

  scrollToTop() {
    return window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
