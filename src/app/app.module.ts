import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent,DialogContentExampleDialog } from './app.component';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SectionChartComponent } from './section-chart/section-chart.component';
import { TablesComponent } from './tables/tables.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent,DialogProduct } from './products/products.component';
import { CommandsComponent } from './commands/commands.component';
import { CustomersComponent } from './customers/customers.component';
import { ProvidersComponent } from './providers/providers.component';
import { ComptesComponent } from './comptes/comptes.component';
import { SiginComponent } from './sigin/sigin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdDetailComponent } from './ad-detail/ad-detail.component';
import { AppRoutingModule } from './app-routing.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
//import {MatDialog}



@NgModule({
  declarations: [
    AppComponent,
    SectionChartComponent,
    TablesComponent,
    MessagesComponent,
    SettingsComponent,
    ProductsComponent,
    CommandsComponent,
    CustomersComponent,
    ProvidersComponent,
    ComptesComponent,
    SiginComponent,
    SignUpComponent,
    AdDetailComponent,
    DialogContentExampleDialog,
    DialogProduct
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    FormsModule,
    MatChipsModule,
    ReactiveFormsModule,
    NgApexchartsModule,MatIconModule,
    MatTableModule,MatNativeDateModule,MatPaginatorModule,MatSortModule,
    RouterModule,
    AppRoutingModule,MatCheckboxModule,MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
