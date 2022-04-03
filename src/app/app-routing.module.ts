import { createComponentDefinitionMap } from '@angular/compiler/src/render3/partial/component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminConnexionComponent } from './component/admin-connexion/admin-connexion.component';
import { AdminProductComponent } from './component/admin-product/admin-product.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { PaiementComponent } from './component/paiement/paiement.component';
import { PanierComponent } from './component/panier/panier.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path: 'panier', component: PanierComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'paiement', component: PaiementComponent},
  {path: 'admin-product', component: AdminProductComponent},
  {path: 'admin-connexion', component: AdminConnexionComponent},
  
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
