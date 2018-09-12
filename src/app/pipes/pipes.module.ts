import {NgModule} from '@angular/core';
import {TimefomatPipe} from './timefomat/timefomat';
import {Textnumfomat} from "./textnumfomat/textnumfomat";


@NgModule({
  declarations: [TimefomatPipe,
    Textnumfomat],
  imports: [],
  exports: [TimefomatPipe,
    Textnumfomat]
})
export class PipesModule {
}
