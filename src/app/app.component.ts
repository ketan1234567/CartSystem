import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
<div class="grid-container" >
  <app-cart class="cart" style="float: right; margin:20px;"></app-cart>
  <app-store class="store"></app-store>
</div>
  `

})
export class AppComponent {
  title = 'CartSystem';
}
