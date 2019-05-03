import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragTableComponent } from './drag-table.component';

const routes: Routes = [
  { path: '',
    component: DragTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
