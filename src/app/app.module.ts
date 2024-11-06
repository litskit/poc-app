import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReleaseCalendarComponent } from './release-calendar/release-calendar.component';
import { TableModule } from 'primeng/table'; // Import TableModule
import { HttpClientModule } from '@angular/common/http';
import { CsvDataService } from './release-calendar-service/release-calendar-service.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ChartModule } from 'primeng/chart';
import { ProgressBarModule } from 'primeng/progressbar';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ReleaseCalendarComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    AvatarModule,
    ChartModule,
    ProgressBarModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    SidebarModule,
  ],
  providers: [CsvDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
