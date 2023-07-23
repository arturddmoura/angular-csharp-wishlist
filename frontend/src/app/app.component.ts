import { Component } from '@angular/core';
import { Item } from './models/items';
import { WishlistService } from './services/wishlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  wishlist: Item[] = [];
  itemToEdit?: Item;
  displayedColumns: string[] = [
    'name',
    'description',
    'price',
    'quantity',
    'image',
    'actions',
  ];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.wishlistService
      .getWishlist()
      .subscribe((result: Item[]) => (this.wishlist = result));
  }

  initNewItem() {
    this.itemToEdit = new Item();
  }

  editItem(item: Item) {
    this.itemToEdit = item;
  }

  updateItems(items: Item[]) {
    this.wishlist = items;
  }
}
