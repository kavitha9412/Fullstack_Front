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
import { AdminProductComponent } from './component/admin-product/admin-product.component';
import { AdminConnexionComponent } from './component/admin-connexion/admin-connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    PanierComponent,
    ConnexionComponent,
    PaiementComponent,
    AdminProductComponent,
    AdminConnexionComponent
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
