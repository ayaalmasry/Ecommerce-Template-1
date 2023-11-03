import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../all-product/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: any
  ProdDetails:any={};
  constructor(private avcRoute: ActivatedRoute,private prSrv:ProductService,
    private router:Router) {
    this.id = this.avcRoute.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
    this.get()
  }
  get(){
    this.prSrv.getProductById(this.id).subscribe((res:any)=>{
      console.log(res);
      this.ProdDetails = res
    })
  }
  back(){
    this.router.navigate(['products'])
  }

}
