import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReleaseCalendarComponent } from './release-calendar/release-calendar.component';
import { HomeComponent } from './home/home.component';
import { BizValueComponent } from './biz-value/biz-value.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'business-value', component: BizValueComponent },
  { path: 'release-calendar', component: ReleaseCalendarComponent } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
