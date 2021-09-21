import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableFinderComponent } from './components/table-finder/table-finder.component';

const routes: Routes = [
  { path: 'table-finder', component: TableFinderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
