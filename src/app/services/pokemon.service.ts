// import { Injectable } from '@angular/core';
// import { Pokemon } from '../models/pokemon.model';

// @Injectable({
//   providedIn: 'root'
// })

// export class PokemonService {

//   private pokemons: Pokemon[] = [
//     // { id: 1, name: 'Bulbizarre', type: 'Plante et Poison', height: 0.7, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' },
//     // { id: 2, name: 'Herbizarre', type: 'Plante et Poison', height: 1.0, weight: 13, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png' },
//     // { id: 3, name: 'Florizarre', type: 'Plante et Poison', height: 2.0, weight: 100, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png' },
//     // { id: 4, name: 'Salamèche', type: 'Feu', height: 0.6, weight: 8.5, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png' },
//     // { id: 5, name: 'Reptincel', type: 'Feu', height: 1.1, weight: 19, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png' },
//     // { id: 6, name: 'Dracaufeu', type: 'Feu et Vol', height: 1.7, weight: 90.5, image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png' }
//   ];

//   constructor() {
//     this.pokemons = this.pokemons;
//   }

//   getPokemons(): Pokemon[] {
//     return this.pokemons;
//   }

//   getPokemonCount(): number {
//     return this.pokemons.length;
//   }

//   formatNumber(value?: number): string {
//     if (value === null || value === undefined) {
//       return 'N/A';
//     }
//     return value.toLocaleString('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + " kg";
//   }

// }

// // export interface Pokemon {
// //   id: number;
// //   name: string;
// //   type: string;
// //   height?: number;
// //   weight?: number;
// //   image?: string;
// // }


// import { Injectable } from '@angular/core';
// import { Pokemon } from '../models/pokemon.class';

// @Injectable({
//   providedIn: 'root'
// })
// export class PokemonService {

//   private pokemons: Pokemon[] = [];

//   constructor() {
//     this.pokemons.push(new Pokemon(1, 'Bulbizarre', 'Plante et Poison', 0.7, undefined, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'));
//     this.pokemons.push(new Pokemon(2, 'Herbizarre', 'Plante et Poison', 1.0, 13, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'));
//     this.pokemons.push(new Pokemon(3, 'Florizarre', 'Plante et Poison', 2.0, 100, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'));
//     this.pokemons.push(new Pokemon(4, 'Salamèche', 'Feu', 0.6, 8.5, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'));
//     this.pokemons.push(new Pokemon(5, 'Reptincel', 'Feu', 1.1, 19, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png'));
//     this.pokemons.push(new Pokemon(6, 'Dracaufeu', 'Feu et Vol', 1.7, 90.5, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'));
//   }

//   getPokemons(): Pokemon[] {
//     return this.pokemons;
//   }

//   getPokemonCount(): number {
//     return this.pokemons.length;
//   }

//   formatNumber(value?: number): string {
//     if (value === null || value === undefined) {
//       return 'N/A';
//     }
//     return value.toLocaleString('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
//   }
// }

import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, mergeMap, Observable, switchMap } from 'rxjs';
import { Pokemon } from '../models/pokemon.class';
import { Generation } from '../models/generation.model';
import { Pokemon as PokemonClass } from '../models/pokemon.class';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/generation/';
  private pokemonsApiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  private pokemons: Pokemon[] = [];

  constructor(@Inject(HttpClient) private _httpClient: HttpClient) {
    // this._httpClient = _httpClient;
    this.pokemons.push(new Pokemon(1, 'Bulbizarre', 'Plante et Poison', 0.7, undefined, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'));
    this.pokemons.push(new Pokemon(2, 'Herbizarre', 'Plante et Poison', 1.0, 13, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'));
    this.pokemons.push(new Pokemon(3, 'Florizarre', 'Plante et Poison', 2.0, 100, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'));
    this.pokemons.push(new Pokemon(4, 'Salamèche', 'Feu', 0.6, 8.5, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'));
    this.pokemons.push(new Pokemon(5, 'Reptincel', 'Feu', 1.1, 19, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png'));
    this.pokemons.push(new Pokemon(6, 'Dracaufeu', 'Feu et Vol', 1.7, 90.5, 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'));
  }

  getGenerations(): Observable<Generation[]> {
    // return this._httpClient.get<Generation[]>(this.apiUrl + '/all.json');
    return this._httpClient.get<{ results: Generation[] }>(this.apiUrl).pipe(
      map(response => response.results)
    );
    // pipe(
    // map(response => response.results),
    // catchError(error => {
    //   console.error('Erreur lors de la récupération des générations', error);
    //   throw error;
    // })
    // );
  }

  // getPokemonsByGenerationUrl(): Observable<Pokemon[]> {
  //   return this._httpClient.get<{ results: Pokemon[] }>(this.pokemonsApiUrl).pipe(
  //     map(response => response.results)
  //   );
  // }

  // getPokemonsByGenerationUrl(): Observable<Pokemon[]> {
  //   return this._httpClient.get<{ results: { name: string, url: string }[] }>(this.apiUrl).pipe(
  //     mergeMap(response => {
  //       const pokemonDetails$ = response.results.map(pokemon => this._httpClient.get<any>(pokemon.url));
  //       return forkJoin(pokemonDetails$);
  //     }),
  //     map(pokemonDetails => {
  //       return pokemonDetails.map(detail => new Pokemon(
  //         parseInt(detail.id, 10),
  //         detail.name,
  //         detail.types.map((type: any) => type.type.name).join(', '),
  //         detail.height / 10,
  //         detail.weight / 10,
  //         // detail.sprites.front_default
  //       ));
  //     })
  //   );
  // }
  // getPokemonsByGenerationUrl(): Observable<Pokemon[]> {
  //   return this._httpClient.get<{ results: { name: string, url: string }[] }>(this.pokemonsApiUrl).pipe(
  //     map(response => response.results.map(poke => {
  //       const id = parseInt(poke.url.split('/').slice(-2, -1)[0], 10);
  //       const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  //       return new Pokemon(id, poke.name, 'Unknown', 0, 0, imageUrl);
  //     }))
  //   );
  // }
  // getPokemonsByGenerationUrl(): Observable<Pokemon[]> {
  //   return this._httpClient.get<{ results: { name: string; url: string }[] }>(this.pokemonsApiUrl).pipe(
  //     map(response => response.results.map(poke => {
  //       const id = parseInt(poke.url.split('/').slice(-2, -1)[0], 10);
  //       const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  //       return {
  //         id: id,
  //         name: poke.name,
  //         type: poke.url,
  //         height: undefined,
  //         weight: undefined,
  //         image: imageUrl
  //       } as Pokemon;
  //     }))
  //   );
  // }
  getPokemonsByGenerationUrl(): Observable<{ count: number, pokemons: Pokemon[] }> {
    return this._httpClient.get<{
      count: number; results: { name: string; url: string; }[]
    }>(this.pokemonsApiUrl).pipe(
      switchMap(response => {
        // const pokeCounts = response.count;
        const pokemonDetailsRequests = response.results.map(poke => {
          const id = parseInt(poke.url.split('/').slice(-2, -1)[0], 10);
          const detailsUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;

          return this._httpClient.get<any>(detailsUrl).pipe(
            map(details => ({
              id: id,
              name: poke.name,
              height: details.height / 10,
              weight: details.weight / 10,
              type: details.types.map((t: any) => t.type.name).join(', '),
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            } as Pokemon))
          );
        });

        return forkJoin(pokemonDetailsRequests).pipe(
          map(pokemons => ({ count: response.count, pokemons: pokemons }))
        );
      })
    );
  }

  getPokemonDetails(id: number): Observable<Pokemon> {
    return this._httpClient.get<any>(`${this.pokemonsApiUrl}${id}`).pipe(
      map(details => {
        const pokemon = new PokemonClass(
          details.id,
          details.name,
          details.types.map((type: any) => type.type.name).join(', '),
          details.height / 10,
          details.weight / 10,
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${details.id}.png`,
        );
        return pokemon;
        // id: details.id,
        // name: details.name,
        // height: details.height / 10,
        // weight: details.weight / 10,
        // type: details.types.map((t: any) => t.type.name).join(', '),
      })
    );
  }


  getPokemons(): Pokemon[] {
    return this.pokemons;
  }

  getPokemonCount(): number {
    return this.pokemons.length;
  }

  formatNumber(value?: number): string {
    if (value === null || value === undefined) {
      return 'N/A';
    }
    return value.toLocaleString('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  }
}
