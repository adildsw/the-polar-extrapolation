import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { IIceArea, IIceAge } from './data-interface';

@Injectable({providedIn: 'root'})
export class DataProviderService {

  constructor(private http : HttpClient) { }

  //Ice Area Data Retrieval
  public iceAreaURL = 'http://localhost:5002/icearea/1';
  setIceAreaURL(month: string) {
    this.iceAreaURL = 'http://localhost:5002/icearea/' + month;
  }
  getIceArea(): Observable<IIceArea[]> {
    return this.http.get<IIceArea[]>(this.iceAreaURL);
  }

  //Sea Level Data Retrieval
  public seaLevelURL = 'http://localhost:5002/sealevel';
  getSeaLevelURL(): Observable<IIceArea[]> {
    return this.http.get<IIceArea[]>(this.seaLevelURL);
  }

  //Ice Age Data Retrieval
  public iceAgeURL = 'http://localhost:5002/seaiceage';
  getIceAge(): Observable<IIceAge[]> {
    return this.http.get<IIceAge[]>(this.iceAgeURL);
  }

}
