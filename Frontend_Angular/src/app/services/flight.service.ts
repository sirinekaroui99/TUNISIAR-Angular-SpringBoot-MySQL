import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Flights } from "../flights";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class FlightService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getFlights(): Observable<Flights[]> {
    return this.http.get<Flights[]>(`${this.apiServerUrl}/flights/all`);
  }

  public addFlight(flight: Flights): Observable<Flights> {
    return this.http.post<Flights>(`${this.apiServerUrl}/flights/add`, flight);
  }

  public updateFlight(flight: Flights): Observable<Flights> {
    return this.http.put<Flights>(`${this.apiServerUrl}/flights/update`, flight);
  }

  public deleteFlight(flightId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/flights/delete/${flightId}`);
  }
  public findFlightById(flightId: number): Observable<Flights> {
    return this.http.get<Flights>(`${this.apiServerUrl}/flights/find/${flightId}`);
  }

}