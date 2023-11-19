import { Component } from '@angular/core';
import { Produit } from '../models/produit.model';
import { PanierState } from '../ngxs/states/panier.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {

  @Select(PanierState.getArticles) panier$!: Observable<Produit[]>;
  @Select(PanierState.getPrixTotal) prixTotal$!: Observable<number>;
  // recupération des produits du panier via le store ngxs

  constructor(private store: Store) { }


  ngOnInit(){
    this.panier$.subscribe((data) => {
      console.log(data);
    })
  }





    
}
