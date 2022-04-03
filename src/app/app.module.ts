import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { PanierComponent } from './component/panier/panier.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { PaiementComponent } from './component/paiement/paiement.component';
<<<<<<< HEAD
import { AdminProductComponent } from './component/admin-product/admin-product.component';
import { AdminConnexionComponent } from './component/admin-connexion/admin-connexion.component';
=======
>>>>>>> 41a9c290e113bb4e9298f3eeb65e7dfb4224af5f

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    PanierComponent,
<<<<<<< HEAD
    InscriptionComponent,
    ConnexionComponent,
    PaiementComponent,
    AdminProductComponent,
    AdminConnexionComponent
=======
    ConnexionComponent,
    PaiementComponent
>>>>>>> 41a9c290e113bb4e9298f3eeb65e7dfb4224af5f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
