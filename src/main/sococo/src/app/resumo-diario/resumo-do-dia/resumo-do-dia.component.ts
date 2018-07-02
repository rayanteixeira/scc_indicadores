import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ResumoDiarioService, ResumoDiarioFilter} from '../resumo-diario.service';
import {ResumoDiario} from '../resumo-diario.model';


@Component({
  selector: 'app-resumo-diario',
  templateUrl: './resumo-do-dia.component.html',
  styleUrls: ['./resumo-do-dia.component.css']
})
export class ResumoDoDiaComponent implements OnInit {

  datePipe: any;
  @ViewChild('formulario') public formulario: NgForm;

  buscaData: Date;

  filter: ResumoDiarioFilter = new ResumoDiarioFilter();

  headerRow: string[];
  dataRows: ResumoDiario[];
  resumoDiario: ResumoDiario;

  constructor(
    private sococoService: ResumoDiarioService
  ) { }

  ngOnInit() {
    this.listaHeaderRow();
    this.getResumoDiario();
  }

  public buscaPorData(event) {
    
    this.filter.dataLancamento = event
    console.log(event);
    this.sococoService.buscarPorData(this.filter)
      .subscribe((resumoDiario: ResumoDiario[]) => {

        console.log(resumoDiario.length);
        
        if (resumoDiario.length > 0) {
          this.dataRows = resumoDiario;
          
        } else {
          this.dataRows = [];
          let resumo = new ResumoDiario(event,null,null,null,null,null,null,null,null,null,null,null,null,null);
          this.dataRows.push(resumo)
        }
        console.log(this.dataRows);
      });
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
