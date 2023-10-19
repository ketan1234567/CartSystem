import { Component, OnInit } from '@angular/core';
import { Item } from '../services/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [`
  .cart-container {
    background-color: lightblue;
    padding: 10px;
  }
`]
})
export class CartComponent implements OnInit {
  cartItems:Item[]=[]
  constructor(private service:ItemService){}
  ngOnInit(): void {
    this.GetItemsForCart();

  }
  GetItemsForCart(){
    this.cartItems=this.service.getSelectedItems()

  }
  removeItemFromCart(id:number){
    this.service.removeItem(id)
  }

}
