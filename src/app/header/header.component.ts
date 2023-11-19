import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit.model';
import { PanierState } from '../ngxs/states/panier.state';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Select(PanierState.getNbArticles) nbArticles$!: Observable<Number>;

  nom : string = "Léo HOTZ";
  nomTP : string = "TP04"

  constructor(private store : Store) { }


}
