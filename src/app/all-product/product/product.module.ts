import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductComponent } from '../all-product.component';
import { AppModule } from 'src/app/app.module';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from 'src/app/spinner/spinner.component';
import { AddproductComponent } from 'src/app/addproduct/addproduct.component';
import { DetailsComponent } from 'src/app/details/details.component';



@NgModule({
  declarations: [AllProductComponent],
  imports: [
    CommonModule,
    AppModule,
    HttpClientModule,
    SpinnerComponent,
    AddproductComponent,
    DetailsComponent
  ],
  exports:[
    AllProductComponent
  ]
})
export class ProductModule { }
