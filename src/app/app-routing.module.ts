import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MdwComponent } from './mdw';
import { AnimationsIndexComponent } from './animations';
import { DynamicComponent } from './dynamic/index.component';

export const routes: Routes = [
  { title: 'Dynamic', path: 'dynamic', component: DynamicComponent },
  { title: 'Animations', path: 'animations', component: AnimationsIndexComponent },
  { title: 'Charts', path: 'md', component: MdwComponent },
  { path: '', redirectTo: 'dynamic', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }