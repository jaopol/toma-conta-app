import { Component, OnInit } from '@angular/core';
import { ApontamentoDTO } from '../../core/model/apontamentoDTO';
import { ApiService } from '../../core/api.service';
import { Location } from '@angular/common';
import { Mes } from '../../core/enuns/mes';
import { TipoApontamento } from '../../core/enuns/tipoApontamento';
import { TipoPagamento } from '../../core/enuns/tipoPagamento';

@Component({
  selector: 'app-apontamento',
  templateUrl: './apontamento.component.html',
  styleUrls: ['./apontamento.component.scss']
})
export class ApontamentoComponent implements OnInit {

  public apontamento = new ApontamentoDTO();
  public tipoPagamento: TipoPagamento;

  constructor( private apiService: ApiService, private location: Location ) {
    const data = new Date();
    // this.apontamento.dataApontamento = data.toDateString();
    this.apontamento.numeroMes = data.getMonth();
    this.apontamento.diaApontamento = data.getDate().valueOf();
    this.apontamento.mesApontamento = Mes[ this.apontamento.numeroMes ];
    this.apontamento.tipoApontamento = TipoApontamento.despesa;
    console.log( this.apontamento.tipoApontamento );
   }

  ngOnInit() {
  }

  public apontar(): void {
    this.apiService.apontar( this.apontamento ).subscribe( data => {
    alert( 'Seu apontamento foi realizado com sucesso!' );
    this.goBack();
    }, error => {
      console.log( 'Error no apontamento', error );
    } );
  }

  public goBack() {
    this.location.back();
  }

}
