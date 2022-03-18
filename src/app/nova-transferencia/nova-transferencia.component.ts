import { Transferencia } from './../model/transferencia.model';
import { TransferenciaService } from './../service/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>(); //tirar esses dados daqui e colocar para quem chamou, propagar os dados atraves do event emitter

  public valor: number;
  public destino: number;

  constructor(private service: TransferenciaService, private router: Router) { }

  ngOnInit(): void {
  }

  transferir(){
    console.log('solicitado a transferencia')

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino}

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado)
      this.limparCampos()
      this.router.navigateByUrl('extrato')
    },
    (error) => {
      console.error(error)
    }
    )
  }

  limparCampos(){
    this.valor = 0
    this.destino = 0
  }

}
