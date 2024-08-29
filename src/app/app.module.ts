import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationsComponent } from './composants/generations/generations.component';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';
import { HttpClientModule } from "@angular/common/http";
// import { PokemonDetailsComponent } from './composants/pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent,
    // PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
