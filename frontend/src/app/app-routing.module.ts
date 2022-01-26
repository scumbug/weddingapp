import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { TableFinderComponent } from './components/table-finder/table-finder.component';

const routes: Routes = [
  { path: 'table-finder', component: TableFinderComponent },
  { path: '', component: LandingComponent },
  { path: 'landing', component: LandingComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
