import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/items';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
})
export class EditItemComponent implements OnInit {
  @Input() item?: Item;
  @Output() updatedItems = new EventEmitter<Item[]>();

  constructor(private wishListService: WishlistService) {}

  ngOnInit(): void {}

  updateItem(item: Item) {
    this.wishListService
      .updateItem(item)
      .subscribe((result: Item[]) => this.updatedItems.emit(result));
  }

  deleteItem(item: Item) {
    this.wishListService
      .deleteItem(item)
      .subscribe((result: Item[]) => this.updatedItems.emit(result));
  }

  createItem(item: Item) {
    this.wishListService
      .createItem(item)
      .subscribe((result: Item[]) => this.updatedItems.emit(result));
  }
}
