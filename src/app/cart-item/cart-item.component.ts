import {Component, OnInit} from '@angular/core';
import {Item} from "../dto/item";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  item = new Item("I001",
    "https://m.media-amazon.com/images/I/71+aeM5xpZL._AC_UY218_.jpg",
    "Donerton Gaming Headset, Over-Ear Gaming Headphones with Noise Canceling Mic, Stereo Bass Surround Sound, Soft Memory Earmuffs LED Light PS4 Gaming Headset Compatible with PC, Laptop, PS4, PS5, Red,",
    4,
    99,
    10)

  inCart = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  updateCart(increment: boolean) {
    increment? this.inCart++ : this.inCart--;
  }
}
