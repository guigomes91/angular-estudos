import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {

  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput?: ElementRef;

  constructor() {
  }

  incrementa() {
    if (this.campoValorInput != undefined) {
      this.campoValorInput.nativeElement.value++;
    }

    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    if (this.campoValorInput != undefined) {
      this.campoValorInput.nativeElement.value--;
    }

    this.mudouValor.emit({novoValor: this.valor});
  }
}
