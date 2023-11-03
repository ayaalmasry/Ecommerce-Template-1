import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent implements OnInit {
  products: any[]=[];
  categories: any;
  loadingPage:boolean=false;
  cartProducts:any[]=[];
  productFieldNumber:boolean=false;
  amount:number=0;
  cartproducts: any[]=[];
  item:any=[];


  constructor(private productSrv:ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAll();
    this.getCategories()
  }
  getAll(){
    this.productSrv.getAllProduct().subscribe((res:any)=>{
      this.loadingPage = true
      console.log(res);
      this.products = res
      this.loadingPage = false
    },(error)=>{
      this.loadingPage = false
      alert(error.message)
    })
  }
  filterChanged(event:any){
    let value = event.target.value;
    console.log(value);
    if(value === 'AllProduct'){
      this.getAll();
    }else{

      this.productSrv.getSpecificCategory(value).subscribe((res:any)=>{
        this.products = res;
        
      })
    }

  }


  // getShortDescription(product:any) {
  //   if (product.description.length > 30) {
  //     return product.description.slice(0, 30) + '...';
  //   } else {
  //     return product.description;
  //   }
  // }
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
  getCategories(){
    this.loadingPage = true
     this.productSrv.getCategoris().subscribe((res)=>{
      console.log(res);
      this.categories = res
      this.loadingPage = false
     })
  }

  addToCart(event:any){
    // console.log(event);
    if("cart" in localStorage){
      this.cartproducts=JSON.parse(localStorage.getItem("cart")!)
      let exist=this.cartproducts.find((product:any) =>product.id == event.id)
      if(exist){
        alert("Product is Already Exists!")
      }else{
        this.cartproducts.push(event);
        localStorage.setItem("cart",JSON.stringify(this.cartproducts));
  

      }
     

   
    }
    else{
      this.cartproducts.push(event);
      localStorage.setItem("cart",JSON.stringify(this.cartproducts));


    }
    // this.cartproducts=localStorage.getItem("cart")
    // localStorage.setItem("cart",JSON.stringify(event));
  }
  goDetails(id:number){
    console.log(id)
    this.router.navigate(['detils/',id])
  }


  // addToCart(product:any){
  //   this.productFieldNumber= true
  //   if("cart" in localStorage){
  //     this.cartProducts=JSON.parse(localStorage.getItem("cart")!)
  //     let exist = this.cartProducts.find(x=>x.x.id == product.x.id)
  //     if(exist){
  //       alert("product already exist!")
  //     }else{
  //       this.cartProducts.push(product)
  //       localStorage.setItem("cart",JSON.stringify(this.cartProducts))
     
  //     }
  //     }else{
  //     this.cartProducts.push(product)
  //     localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  
  //   }
  //   // console.log(product);
  //   // localStorage.setItem("cart",JSON.stringify(product))
  //   // // this.cartProducts = localStorage.getItem("cart")
  // }
  // add(product:any){
  //   product.quantity= this.amount;

    

  // }

  
}
