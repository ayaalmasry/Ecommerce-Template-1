import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartproducts: any[]=[];
  priceValue:number=0;
  total: any;

  constructor() { }

  ngOnInit(): void {
    this.getCartProduct();
    this.getProductCart()
  }
  getCartProduct(){
    if("cart" in localStorage){
      this.cartproducts=JSON.parse(localStorage.getItem("cart")!)
      console.log(this.cartproducts)

    }
  }

  getProductCart(){
    this.total=0
    for(let x in this.cartproducts){
       this.total += this.cartproducts[x].item.price * this.cartproducts[x].quantity;
      console.log(this.total);
    }

  }
  addPrice(index:number){
    debugger
    this.cartproducts[index].quantity ++;
    this.getProductCart();
    localStorage.setItem("cart",JSON.stringify(this.cartproducts));
  
  }
  menusPrice(index:number){
    this.cartproducts[index].quantity --;
    this.getProductCart();
    localStorage.setItem("cart",JSON.stringify(this.cartproducts));
  
  }
  delete(index:number){
    this.cartproducts.splice(index , 2);
    this.getProductCart();
    localStorage.setItem("cart",JSON.stringify(this.cartproducts));
 

  }

}
