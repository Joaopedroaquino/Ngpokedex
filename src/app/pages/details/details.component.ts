import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeapiService } from '../../service/pokeapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon'
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species'
  
  public pokemon: any;


  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeapiService:PokeapiService
  ) { }

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon(){
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon =this.pokeapiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeapiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    
    return forkJoin([pokemon, name]).subscribe(
      res => {
     this.pokemon = res;

      }
    );

  }
}
