import { Component, OnInit } from '@angular/core';
import { Item } from '../services/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  storeItems:Item[]=[];
  constructor(private services:ItemService){}

  getStoreitems():void{
    this.storeItems=this.services.getItems()

  }

  ngOnInit(): void {
    this.getStoreitems()
   
  }
  addItemInCart(id:number):void{
    this.services.addItem(id)

  }

}
