import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ImagemService } from "./imagem.service";
import { ImagemComponent } from "./imagem/imagem.component";

@NgModule({
  declarations: [AppComponent, ImagemComponent],
  imports: [BrowserModule, HttpModule, FormsModule],
  providers: [ImagemService],
  bootstrap: [AppComponent]
})
export class AppModule {}
