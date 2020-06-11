import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApontamentoComponent } from './components/apontamento/apontamento.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  { path : 'apontamento', component : ApontamentoComponent },
  { path : 'welcome', component : WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
