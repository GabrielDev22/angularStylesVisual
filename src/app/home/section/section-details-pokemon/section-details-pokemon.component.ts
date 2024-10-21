import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExternalEndPointsAplicationService } from '../../external-end-points-aplication.service';

@Component({
  selector: 'app-section-details-pokemon',
  templateUrl: './section-details-pokemon.component.html',
  styleUrls: ['./section-details-pokemon.component.css']
})
export class SectionDetailsPokemonComponent implements OnInit {

 pokemon : any;
 pokemonImage! : string;
 pokemonName! : string;
 pokemonExperience! : number;
 pokemonWeight! : number;
 pokemonHeight! : number;
 pokemonType! : string;
 pokemonType2! : string;
 maxExperience = 500;

 pokemonAbilitiesName1: string = '';
 pokemonAbilitiesName2 : string = '';
 abilitiesContent : string[] = [];
 abilitieLanguague! : any;

  constructor(
    private route : ActivatedRoute,
    private _externalEndPointApplication : ExternalEndPointsAplicationService,
    private change : ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const namePokemon = params['name'];
      this.getPokemonByName(namePokemon, this.pokemon);
    })
  }

  getPokemonByName(pokemonName : string, pokemon: any){
    this._externalEndPointApplication.getPokemonByName(pokemonName).subscribe(res => {
      this.pokemonName = res.name;
      this.pokemonImage = res.sprites.other.dream_world.front_default;
      this.pokemonExperience = res.base_experience;
      this.pokemonHeight = res.height;
      this.pokemonWeight = res.weight;
      this.pokemonType = res.types[0].type.name;
      this.pokemonType2 = res.types[1].type.name;
      this.pokemonAbilitiesName1 = res.abilities[0].ability.name;
      this.pokemonAbilitiesName2 = res.abilities[1].ability.name;
    })
  }

  getPokemonAbility(pokemonAbilityName : string){
    this._externalEndPointApplication.getPokemonAbility(pokemonAbilityName).subscribe(res => {
      console.log(res);
      this.abilitiesContent = res.names;
      this.abilitiesContent.forEach((item: any) => {
        if(item.language && item.language.name === 'es'){
          this.abilitieLanguague = item;
        }
      })
    })
  }

  getExperiencePercentage(): number{
    return (this.pokemonExperience / this.maxExperience) * 100;
  }

}
