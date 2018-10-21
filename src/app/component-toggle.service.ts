import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ComponentToggleService {

  //IceArea Visibility Toggle Service
  public iceArea = new BehaviorSubject<string>('out');
  setIceAreaState(state : string) {
    this.iceArea.next(state);
  }
  getIceAreaState(): Observable<any> {
    return this.iceArea.asObservable();
  }

  //IceAge Visibility Toggle Service
  public iceAge = new BehaviorSubject<string>('out');
  setIceAgeState(state : string) {
    this.iceAge.next(state);
  }
  getIceAgeState(): Observable<any> {
    return this.iceAge.asObservable();
  }

  //SeaLevel Visibility Toggle Service
  public seaLevel = new BehaviorSubject<string>('out');
  setSeaLevelState(state : string) {
    this.seaLevel.next(state);
  }
  getSeaLevelState(): Observable<any> {
    return this.seaLevel.asObservable();
  }
}
