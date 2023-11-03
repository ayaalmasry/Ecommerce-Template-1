import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  constructor(private router:Router) { }
  @Input() product:any=[];
  @Output() item = new EventEmitter

  productFieldNumber:boolean=false;
  addButton:boolean=false;
  amount:number=0

  ngOnInit(): void {
  }
  add(){
    this.item.emit({item:this.product,quantity:this.amount}); 

  }
  showShortDescription(product:any) {
    if (product.description.length > 20 && !product.showFullDescription) {
      return product.description.slice(0, 20) + '...';
    } else {
      return product.description;
    }
  }
  
  toggleDescription(product:any) {
    product.showFullDescription = !product.showFullDescription;
  }

  goDetails(id:number){
    console.log(id)
    this.router.navigate(['detils/',id])
  }

}
