import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExternalEndPointsAplicationService } from '../../external-end-points-aplication.service';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalMovesPokemonComponent } from '../modal-moves-pokemon/modal-moves-pokemon.component';

@Component({
  selector: 'app-section-details-pokemon',
  standalone: true,
  imports: [CommonModule, NgbTooltipModule],
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
 abilitiesDescription : any;
 typePokemonProgressBar! : string;
 backgroundContainer! : string;

 versions : any;
 versionImages : string[] = [];

 moviesPokemon : string[] = [];
 moviePokemonByName : any;

  constructor(
    private route : ActivatedRoute,
    private _externalEndPointApplication : ExternalEndPointsAplicationService,
    private change : ChangeDetectorRef,
    private modalService : NgbModal
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const namePokemon = params['name'];
      this.getPokemonByName(namePokemon);
    })
  }

  getPokemonByName(pokemonName : string){
    this._externalEndPointApplication.getPokemonByName(pokemonName).subscribe(res => {
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
      this.getPokemonNature(res.id);
      const moviePokemonsName = res.moves;

      this.versions = res.sprites.versions;
      for(const generation in this.versions){
        const generationData = this.versions[generation];
        const firstPropertyValue = Object.values(generationData)[0] as any;
        this.versionImages.push(firstPropertyValue.front_default);
      }

      this.moviesPokemon = moviePokemonsName.map((movesDetails : any) => movesDetails.move.name);
      console.log(res);
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
      case 'electric':
        this.typePokemonProgressBar = 'electric';   
        this.backgroundContainer = 'electric';   
        break;
      case 'ground':
        this.typePokemonProgressBar = 'ground';   
        this.backgroundContainer = 'ground';   
        break;
      case 'poison':
        this.typePokemonProgressBar = 'poison';   
        this.backgroundContainer = 'poison';   
        break;
      case 'bug':
        this.typePokemonProgressBar = 'bug';   
        this.backgroundContainer = 'bug';   
        break;
      case 'fairy':
        this.typePokemonProgressBar = 'fairy';   
        this.backgroundContainer = 'fairy';   
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
        this.abilitiesDescription = abilityFlavorTextEntries.find((flavorText : any) => flavorText.language && flavorText.language.name === 'es');
        if(spanishAbility){
             this.abilitiesContent.push(spanishAbility.name);
           } 
        });
    });
  }

  getPokemonNature(pokemonId : number){
    this._externalEndPointApplication.getPokemonNature(pokemonId).subscribe(res => {
      console.log(res);
    })
  }

  getExperiencePercentage(): number{
    return (this.pokemonExperience / this.maxExperience) * 100;
  }

  getMovesPokemonForName(movesPokemonName : string){
    this._externalEndPointApplication.getMovesPokemonForName(movesPokemonName).subscribe(res => {
      if(res != null){
        const modalRef = this.modalService.open(ModalMovesPokemonComponent,
          {
            size: 'lg',
            centered: true,
            windowClass: 'global-modal-position'
          });
          modalRef.componentInstance.data = res;
      }
    })
  }

}
