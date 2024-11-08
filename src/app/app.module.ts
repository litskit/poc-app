import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// primeNg
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table'; // Import TableModule
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ChartModule } from 'primeng/chart';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TagModule } from 'primeng/tag';

// Component
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReleaseCalendarComponent } from './release-calendar/release-calendar.component';
import { CsvDataService } from './release-calendar-service/release-calendar-service.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { BizValueComponent } from './biz-value/biz-value.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ReleaseCalendarComponent,
    SidebarComponent,
    HomeComponent,
    BizValueComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ToolbarModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    DropdownModule,
    CalendarModule,
    TagModule,
    CardModule,
    AvatarModule,
    ChartModule,
    ProgressBarModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CsvDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
