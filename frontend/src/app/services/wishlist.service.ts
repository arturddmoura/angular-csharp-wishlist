import { Injectable } from '@angular/core';
import { Item } from '../models/items';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private apiRoute = 'Wishlist';

  constructor(private http: HttpClient) {}

  public getWishlist(): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.baseApiUrl}/${this.apiRoute}`);
  }

  public updateItem(item: Item): Observable<Item[]> {
    return this.http.put<Item[]>(
      `${environment.baseApiUrl}/${this.apiRoute}`,
      item
    );
  }

  public createItem(item: Item): Observable<Item[]> {
    return this.http.post<Item[]>(
      `${environment.baseApiUrl}/${this.apiRoute}`,
      item
    );
  }

  public deleteItem(item: Item): Observable<Item[]> {
    return this.http.delete<Item[]>(
      `${environment.baseApiUrl}/${this.apiRoute}/${item.id}`
    );
  }
}
