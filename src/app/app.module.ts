import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { Ng2PanZoomModule } from 'ng2-panzoom';
import {HttpClientModule} from '@angular/common/http';
import { AllProductComponent } from './all-product/all-product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DetailsComponent } from './details/details.component';

// import { DragDropModule } from '@angular/cdk/drag-drop/drag-drop-module';


@NgModule({
  declarations:[
   
    AppComponent,
        AllProductComponent,
        ProductdetailsComponent,
        CartComponent,
        SpinnerComponent,
        AddproductComponent,
        DetailsComponent,

    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    DragDropModule,
    FormsModule,
    Ng2PanZoomModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
