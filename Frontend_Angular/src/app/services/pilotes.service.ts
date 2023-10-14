import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Pilotes } from "../pilotes";


@Injectable({providedIn: 'root'})
export class PilotesService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getPilotes(): Observable<Pilotes[]> {
    return this.http.get<Pilotes[]>(`${this.apiServerUrl}/pilotes/all`);
  }

  public addPilotes(pilotes: Pilotes): Observable<Pilotes> {
    return this.http.post<Pilotes>(`${this.apiServerUrl}/pilotes/add`, pilotes);
  }

  public updatePilotes(pilotes: Pilotes): Observable<Pilotes> {
    return this.http.put<Pilotes>(`${this.apiServerUrl}/pilotes/update`, pilotes);
  }

  public deletePilotes(pilotesId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/pilotes/delete/${pilotesId}`);
  } 
  
  public findPilotesById(pilotesId: number): Observable<Pilotes> {
    return this.http.get<Pilotes>(`${this.apiServerUrl}/pilotes/find/${pilotesId}`);
  } 
  public findPilotesByFid(fid: number): Observable<Pilotes[]> {
    return this.http.get<Pilotes[]>(`${this.apiServerUrl}/pilotes/look/${fid}`);
  }
   
}