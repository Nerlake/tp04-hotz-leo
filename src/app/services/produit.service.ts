import { Injectable } from '@angular/core';
import { Produit } from '../models/produit.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProduitService {

    constructor(private httpClient: HttpClient) { }

    url : string = "assets/produits.json"; 
    produits: Produit[] = [];



    getAllProduct(): Observable<Produit[]> {
        return this.httpClient.get<Produit[]>(this.url);
    }    

}