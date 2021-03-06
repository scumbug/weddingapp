import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

const PRIMENG = [
  MenubarModule,
  SharedModule,
  AutoCompleteModule,
  CardModule,
  DividerModule,
  ToolbarModule,
  ButtonModule,
  TableModule,
];

@NgModule({
  imports: PRIMENG,
  exports: PRIMENG,
})
export class PrimengModule {}
