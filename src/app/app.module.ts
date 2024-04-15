import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { DniComponent } from './form-reactive/dni/dni.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductsComponent,
    ProductDetailComponent,
    FormReactiveComponent,
    DniComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // FORMS FOR TEMPLATE DRIVEN FORMS
    ReactiveFormsModule, // FORMS FOR REACTIVE FORMS
    HttpClientModule, // HTTP CLIENT MODULE for API requests
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
