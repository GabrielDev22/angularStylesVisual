import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const EXTERNAL_ENDPOINT_SERVICE = `https://pokeapi.co/api/v2`;

@Injectable({
  providedIn: 'root'
})
export class ExternalEndPointsAplicationService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemonByName(pokemonName: string): Observable<any>{
    return this.http.get(`${EXTERNAL_ENDPOINT_SERVICE}/pokemon/${pokemonName}`);
  }

  getPokemonList(pokemonNumberList : number, offset : number = 0): Observable<any>{
    let params = new HttpParams()
    .set('limit', pokemonNumberList)
    .set('offset', offset.toString());
    return this.http.get(`${EXTERNAL_ENDPOINT_SERVICE}/pokemon/`, {params});
  }

}
