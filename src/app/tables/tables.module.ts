import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesComponent } from "./tables.component";
import { TablesRoutingModule } from "./tables.routing.module";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    TablesRoutingModule,
    NgxDatatableModule,
    CommonModule
  ],
  declarations: [TablesComponent]
})
export class TablesModule { }
