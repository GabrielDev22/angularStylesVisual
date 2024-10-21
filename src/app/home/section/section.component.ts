import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ExternalEndPointsAplicationService } from '../external-end-points-aplication.service';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SectionDetailsPokemonComponent } from './section-details-pokemon/section-details-pokemon.component';
import { ActivatedRoute, Router } from '@angular/router';

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
  maxExperience = 500;

  constructor(
    private _externalEndPointApplication : ExternalEndPointsAplicationService,
    private change : ChangeDetectorRef,
    private route : Router,
    private activatedRoute : ActivatedRoute
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

  getExperiencePercentage(pokemonBaseExperience : number): number{
    return (pokemonBaseExperience / this.maxExperience) * 100;
  }

  newListPokemon(newPokemonList : number, newOffset : number){
    this.newOffset += newOffset;
    this.getPokemonListResult(newPokemonList, this.newOffset);
    this.scrollToTop();
  }

  reduceListPokemon(newPokemonList : number, newOffset : number){
    this.newOffset -= newOffset;
    this.getPokemonListResult(newPokemonList, this.newOffset);
    this.scrollToTop();
  }

  scrollToTop(): void{
    window.scrollTo({
      top : 0,
      behavior: 'smooth'
    });
  }

  redirectDetailsPokemonById(){
    this.pokemonList.forEach((element: any) => {
      this.route.navigate(['section/details'],
        {
          queryParams: {
            name: element.name,
          }
        }
      );
    });
  }

}
