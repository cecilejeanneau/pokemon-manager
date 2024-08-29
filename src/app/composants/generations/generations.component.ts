import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Generation } from 'src/app/models/generation.model';
// import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {
  // public generations: string[] = [
  //   "Génération I",
  //   "Génération II",
  //   "Génération III",
  //   "Génération IV",
  //   "Génération V",
  //   "Génération VI",
  //   "Génération VII",
  // ];
  public generations: Observable<Generation[]> | undefined;
  errorMessages: string | string[] | null = null;


  constructor(@Inject(PokemonService) private api: PokemonService) {
    // this.generations = this.generations;
  }

  ngOnInit(): void {
    this.loadGenerations();
    //   this.pokemonService.getGenerations().subscribe(
    //     (data) => {
    //       this.generations = data;
    //     },
    //     (error) => {
    //       this.errorMessages = error;
    //     }
    //   );
    //   this.loadGenerations();
  }

  loadGenerations(): void {
    this.generations = this.api.getGenerations();
  }

}
