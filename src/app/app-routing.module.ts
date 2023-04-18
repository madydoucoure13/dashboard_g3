import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';

import { SectionChartComponent} from './section-chart/section-chart.component';
import { ProductsComponent } from './products/products.component';
import { CommandsComponent } from './commands/commands.component';
import { MessagesComponent } from './messages/messages.component';
import { CustomersComponent } from './customers/customers.component';
import { ProvidersComponent } from './providers/providers.component';
import { ComptesComponent } from './comptes/comptes.component';
import { SettingsComponent } from './settings/settings.component';
import { SiginComponent } from './sigin/sigin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdDetailComponent } from './ad-detail/ad-detail.component';

const routes: Routes = [
  {path: 'accueil', component: SectionChartComponent},
  {path:'products',component:ProductsComponent },
  {path:'commands',component:CommandsComponent },
  {path: 'messages', component: MessagesComponent},
  {path:'customers', component:CustomersComponent},
  {path:'providers', component:ProvidersComponent},
  {path: 'comptes', component: ComptesComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'login', component: SiginComponent},
  {path: 'register', component: SignUpComponent},
  {path: 'details', component: AdDetailComponent},
 /* {path: '**', component: AccueilComponent},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
