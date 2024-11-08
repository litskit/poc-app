import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { BusinessValue } from '../models/business-value.interface';

@Injectable({
  providedIn: 'root'
})
export class BusinessValueService {
  private apiUrl = 'assets/business-value.json'; // Update with your actual API endpoint

  constructor(private http: HttpClient) { }

  getBusinessValues(): Observable<BusinessValue[]> {
    return this.http.get<BusinessValue[]>(this.apiUrl);
  }

  // addBusinessValue(value: BusinessValue): Observable<BusinessValue> {
  //   // In a real application, this would be a POST request to your backend
  //   return this.http.post<BusinessValue>(this.apiUrl, value);
  // }
  // Add a new business value
  addBusinessValue(value: BusinessValue): Observable<BusinessValue[]> {
    return this.getBusinessValues().pipe(
      // Simulate appending the new business value
      map((existingValues) => {
        const updatedValues = [...existingValues, value];

        // Here, simulate saving by returning the updated array
        // In a real app, you would call a backend API to persist this data
        this.saveToLocalStorage(updatedValues); // Simulate persistence (e.g., local storage, or API)

        return updatedValues;
      })
    );
  }

        // Simulate saving data (e.g., to a backend or local storage)
  saveToLocalStorage(values: BusinessValue[]): void {
    // Optionally, you can store the updated values in localStorage to persist across page reloads
    localStorage.setItem('businessValues', JSON.stringify(values));
  }
}