import { createComponentDefinitionMap } from '@angular/compiler/src/render3/partial/component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { PaiementComponent } from './component/paiement/paiement.component';
import { PanierComponent } from './component/panier/panier.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path: 'panier', component: PanierComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'paiement', component: PaiementComponent},

  
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
