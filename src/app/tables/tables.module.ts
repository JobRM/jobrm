import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesComponent } from "./tables.component";
import { TablesRoutingModule } from "./tables.routing.module";

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    TablesRoutingModule,
    Ng2SmartTableModule,
    CommonModule
  ],
  declarations: [TablesComponent]
})
export class TablesModule { }
