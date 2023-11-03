import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart.component';
import { AppModule } from 'src/app/app.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    AppModule,
    FormsModule
  ]
  ,exports:[
    CartComponent
  ]
})
export class CartModule { }
