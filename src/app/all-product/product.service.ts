import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAllProduct(){
    return this.http.get(environment.baseApi+'/products') 
  }
  getCategoris(){
    return this.http.get(environment.baseApi +'/products/categories')
  }
  getSpecificCategory(name:string){
    return this.http.get(environment.baseApi +'/products/category/'+name)
  }
  getProductById(id:any){
  return this.http.get('https://fakestoreapi.com/products/'+id)
  }
}
