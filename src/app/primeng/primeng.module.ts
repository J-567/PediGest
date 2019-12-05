import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    MenuModule,
    TableModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule,
    InputTextareaModule

  ],
  exports:[
    InputTextModule,
    ButtonModule,
    MenuModule,
    TableModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule,
    InputTextareaModule
  ]
})
export class PrimengModule { }
