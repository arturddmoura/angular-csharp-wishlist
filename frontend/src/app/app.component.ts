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

  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.wishlistService
      .getWishlist()
      .subscribe((result: Item[]) => (this.wishlist = result));
  }
}
