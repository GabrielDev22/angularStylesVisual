import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ExternalEndPointsAplicationService } from '../external-end-points-aplication.service';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent implements OnInit {

  pokemonList : any[] = [];
  pokemonContentPropertys : any = {};
  startPokemonList : number = 12;
  offset : number = 0;
  newOffset : number = 12;

  constructor(
    private _externalEndPointApplication : ExternalEndPointsAplicationService,
    private change : ChangeDetectorRef,
    private fb : FormBuilder
  ){}

  ngOnInit(){
    this.getPokemonListResult(this.startPokemonList, this.offset);
  }

  getPokemonByName(pokemonName : string, pokemon: any){
    this._externalEndPointApplication.getPokemonByName(pokemonName).subscribe(res => {
      console.log(res);
      pokemon.image = res.sprites.other.dream_world.front_default;
      pokemon.height = res.height;
      pokemon.weight = res.weight;
      pokemon.base_experience = res.base_experience;
      this.change.markForCheck();
    })
  }

  getPokemonListResult(pokemonNumberList : number, offset : number){
    this._externalEndPointApplication.getPokemonList(pokemonNumberList, offset).subscribe(res => {
      this.pokemonList = res.results;
      this.pokemonList.forEach((element: any) => {
        this.getPokemonByName(element.name, element);
      });
    })
  }

  newListPokemon(newPokemonList : number, newOffset : number){
    this.newOffset += newOffset;
    this.getPokemonListResult(newPokemonList, this.newOffset);
  }

  reduceListPokemon(newPokemonList : number, newOffset : number){
    this.newOffset -= newOffset;
    this.getPokemonListResult(newPokemonList, this.newOffset);
  }

}
