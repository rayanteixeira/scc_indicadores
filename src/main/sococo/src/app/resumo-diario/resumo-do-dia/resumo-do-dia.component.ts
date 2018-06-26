import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';
import { ResumoDiarioService } from '../resumo-diario.service';
import { ResumoDiario } from '../resumo-diario.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-resumo-diario',
  templateUrl: './resumo-do-dia.component.html',
  styleUrls: ['./resumo-do-dia.component.css']
})
export class ResumoDoDiaComponent implements OnInit {

  datePipe: any;
  @ViewChild('formulario') public formulario: NgForm;


  headerRow: string[];
  dataRows: ResumoDiario[];
  constructor(
    private sococoService: ResumoDiarioService
  ) { }

  ngOnInit() {
    this.listaHeaderRow();
    this.getResumoDiario();
  }

  private getResumoDiario(): void {
    this.sococoService.getResumoDiario()
      .subscribe((resumoDiario: ResumoDiario[]) => {
        this.dataRows = resumoDiario;
        console.log(this.dataRows);
      });
  }

  public listaHeaderRow(): void {
    this.headerRow = ['ID', 'Data', 'Cocos Desfibrados', 'Cocos Processados', 'CRI', 'Flococo', 'O.I. ETE', 'O. I. Tipo A', 'Torta'];
  }

}
