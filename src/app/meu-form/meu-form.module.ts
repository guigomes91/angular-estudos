import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MeuFormComponent } from './meu-form.component';

@NgModule({
  declarations: [
    MeuFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MeuFormComponent]
})
export class MeuFormModule {

  nome: string = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 20
  }
}
