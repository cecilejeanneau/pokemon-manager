// import { Component } from '@angular/core';
// import { PokemonService } from 'src/app/pokemon.service';

// @Component({
//   selector: 'app-pokemons',
//   templateUrl: './pokemons.component.html',
//   styleUrls: ['./pokemons.component.css']
// })
// export class PokemonsComponent {

//   public pokemons: any[] = [];

//   constructor(private pokemonService: PokemonService) {
//     this.pokemons = this.pokemonService.getPokemons();

//   }

//   getPokemonCount(): number {
//     return this.pokemonService.getPokemonCount();
//   }

//   formatNumber(value?: number): string {
//     return this.pokemonService.formatNumber(value);
//   }

// }


import { Component, Inject, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon as PokemonClass } from 'src/app/models/pokemon.class';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  public pokemons: PokemonClass[] = [];
  public apiPokemons: Observable<{ count: number, pokemons: Pokemon[] }> | undefined;

  constructor(@Inject(PokemonService) private pokemonApi: PokemonService, private pokemonService: PokemonService) {
    this.pokemons = this.pokemonService.getPokemons();
  }
  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.apiPokemons = this.pokemonApi.getPokemonsByGenerationUrl();
  }

  getPokemonCount(): number {
    return this.pokemonService.getPokemonCount();
  }

  formatNumber(value?: number): string {
    return this.pokemonService.formatNumber(value);
  }
}
