import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesComponent } from "./tables.component";
import { TablesRoutingModule } from "./tables.routing.module";

import { Ng2TableModule } from 'ng2-table/ng2-table';

@NgModule({
  imports: [
    TablesRoutingModule,
    Ng2TableModule,
    CommonModule
  ],
  declarations: [TablesComponent]
})
export class TablesModule { }
