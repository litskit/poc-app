import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReleaseCalendarEntry } from '../models/release-calendar-entry.model';

@Injectable({
  providedIn: 'root',
})
export class CsvDataService {
  private jsonUrl = 'assets/release-calendar.json';

  constructor(private http: HttpClient) { }

  getReleaseData(): Observable<ReleaseCalendarEntry[]> {
    return this.http.get<ReleaseCalendarEntry[]>(this.jsonUrl);
  }
}
