import { createComponentDefinitionMap } from '@angular/compiler/src/render3/partial/component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminConnexionComponent } from './component/admin-connexion/admin-connexion.component';
import { AdminProductComponent } from './component/admin-product/admin-product.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
<<<<<<< HEAD
import { InscriptionComponent } from './component/inscription/inscription.component';
=======
>>>>>>> 41a9c290e113bb4e9298f3eeb65e7dfb4224af5f
import { PaiementComponent } from './component/paiement/paiement.component';
import { PanierComponent } from './component/panier/panier.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path: 'panier', component: PanierComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'paiement', component: PaiementComponent},
<<<<<<< HEAD
  {path: 'admin-product', component: AdminProductComponent},
  {path: 'admin-connexion', component: AdminConnexionComponent},
=======

>>>>>>> 41a9c290e113bb4e9298f3eeb65e7dfb4224af5f
  
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
