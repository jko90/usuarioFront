import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-rol-crea',
  templateUrl: './rol-crea.component.html',
  styleUrls: ['./rol-crea.component.css']
})
export class RolCreaComponent implements OnInit {

  id: string = "";

  constructor(
    private ruta: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.id = this.ruta.snapshot.params['id'];
  }


}
