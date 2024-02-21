import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {ToolbarModule} from "primeng/toolbar";
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    CalendarModule,
    ToolbarModule,
    TableModule
  ],
  exports: [
    CardModule,
    InputTextModule,
    CalendarModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimengModule {
}
