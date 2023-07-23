import { Injectable } from '@angular/core';
import { Item } from '../models/items';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor() {}

  public getWishlist(): Item[] {
    let item = new Item();
    item.id = '1';
    item.name = 'Item 1';
    item.description = 'This is item 1';
    item.price = 100.0;
    item.quantity = 1;
    item.image =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDahnud_WsFulNFAkQLAwWeZlMRbJzMaIcZQ&usqp=CAU';

    return [item, item, item, item, item, item, item, item, item, item];
  }
}
