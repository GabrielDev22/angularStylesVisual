import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExternalEndPointsAplicationService } from '../../external-end-points-aplication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-details-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-details-pokemon.component.html',
  styleUrls: ['./section-details-pokemon.component.css']
})
export class SectionDetailsPokemonComponent implements OnInit {

 pokemonImage! : string;
 pokemonName! : string;
 pokemonExperience! : number;
 pokemonWeight! : number;
 pokemonHeight! : number;
 pokemonType! : string;
 pokemonType2! : string;
 maxExperience = 500;

 pokemonAbilitiesName!: any;
 abilitiesContent : string[] = [];
 typePokemonProgressBar! : string;
 backgroundContainer! : string;

  constructor(
    private route : ActivatedRoute,
    private _externalEndPointApplication : ExternalEndPointsAplicationService,
    private change : ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const namePokemon = params['name'];
      this.getPokemonByName(namePokemon);
    })
  }

  getPokemonByName(pokemonName : string){
    this._externalEndPointApplication.getPokemonByName(pokemonName).subscribe(res => {
      console.log(res);
      this.pokemonName = res.name;
      this.pokemonImage = res.sprites.other.dream_world.front_default;
      this.pokemonExperience = res.base_experience;
      this.pokemonHeight = res.height;
      this.pokemonWeight = res.weight;
      this.pokemonType = res.types[0].type.name;
      this.getTypePokemonProgressBar(this.pokemonType);
      this.pokemonType2 = res.types[1].type.name;
      this.pokemonAbilitiesName = res.abilities;
      this.getPokemonAbility(this.pokemonAbilitiesName);
      this.change.markForCheck();
    })
  }

  getTypePokemonProgressBar(pokemonType : string){
    switch(pokemonType){
      case 'fire':
        this.typePokemonProgressBar = 'fire'
        this.backgroundContainer = 'fire';
        break;
      case 'water':
         this.typePokemonProgressBar = 'water'; 
         this.backgroundContainer = 'water'; 
         break;
      case 'grass':
         this.typePokemonProgressBar = 'grass';
         this.backgroundContainer = 'grass';
         break; 
      default:
          this.typePokemonProgressBar;
          this.backgroundContainer;
          break;
    }
    return this.typePokemonProgressBar;
  }

  getPokemonAbility(pokemonAbilityName : any){
    this.abilitiesContent = [];
    pokemonAbilityName.forEach((item: any) => {
      this._externalEndPointApplication.getPokemonAbility(item.ability.name).subscribe(res => {
        const abilityName = res.names;
        const abilityFlavorTextEntries = res.flavor_text_entries;
        const spanishAbility = abilityName.find((ability: any) => ability.language && ability.language.name === 'es');
        const spanishFlavorTextEntreties = abilityFlavorTextEntries.find((flavorText : any) => flavorText.language && flavorText.language.name === 'es');
        console.log(spanishFlavorTextEntreties);   
        if(spanishAbility){
             this.abilitiesContent.push(spanishAbility.name);
           } 
        });
    });
  }

  getExperiencePercentage(): number{
    return (this.pokemonExperience / this.maxExperience) * 100;
  }

}
