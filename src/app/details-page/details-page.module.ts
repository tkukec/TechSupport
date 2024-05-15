import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DetailsPageRoutingModule } from './details-page-routing.module';
import { DetailsPageComponent } from './details-page.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { MainPageModule } from '../main-page/main-page.module';
import { MainPageRoutingModule } from '../main-page/main-page-routing.module';


@NgModule({
  declarations: [DetailsPageComponent],
  imports: [
    CommonModule,
    DetailsPageRoutingModule
  ]
})
export class DetailsPageModule { }
