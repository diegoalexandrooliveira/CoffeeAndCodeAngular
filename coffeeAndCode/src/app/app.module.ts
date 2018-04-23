import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { DadosService } from "./dados.service";
import { DadosComponent } from './dados/dados.component';

@NgModule({
  declarations: [AppComponent, DadosComponent],
  imports: [BrowserModule, HttpModule],
  providers: [DadosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
