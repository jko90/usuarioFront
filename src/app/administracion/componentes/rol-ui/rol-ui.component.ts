import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-rol-ui',
  templateUrl: './rol-ui.component.html',
  styleUrls: ['./rol-ui.component.css']
})
export class RolUiComponent implements OnInit{

  //Recibir información de los componentes
  @Input() seleId: string = "";
  @Input() accionBoton: string = "Crear";

  //Enviar a ejecutar acción hacia los servicios
  @Output() accion: EventEmitter<any> = new EventEmitter();

  //Objeto para agrupar los elementos de un formulario utilizando ReactiveForms
  formulario: FormGroup;

  constructor(private contForm: FormBuilder) {
    this.formulario = this.contForm.group({
      rolId: [''],
      rolNombre: [''],
      rolSigla: [''],
      rolFechmodifi: [''],
      rolEstado: ['']
    })
  }
  ngOnInit(): void {
    this.validarAccion();
  }

  //Validar si es metodo de guardar o actualizar
  validarAccion(){
    if(this.seleId){
      this.accionBoton = "Actualizar";
    }
  }

  emitirAccion(){
    if(this.seleId){
      this.accion.emit({valor: this.formulario.value, accion: this.accionBoton});
    }
  }

}
