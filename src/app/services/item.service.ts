import { Injectable } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './mock-item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  selectedItems:Item[]=[]

  getItems():Item[]{
    return ITEMS


  }
  getSelectedItems():Item[]{
    return this.selectedItems
  }

  addItem(id:number):void{
    const item =ITEMS.find(ob=>ob.id===id)?? {} as Item
    if (this.selectedItems.indexOf(item)<0){
      this.selectedItems.push(item)

    }

  }

  removeItem(id:number):void{
    const item=this.selectedItems.find(ob=>ob.id===id) ?? {} as Item
    const itemindex=this.selectedItems.indexOf(item)
    this.selectedItems.splice(itemindex,1)

  }

}
