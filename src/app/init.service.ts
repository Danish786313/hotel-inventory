import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InitService { 
  config: any
  constructor(private http: HttpClient) { }

  init() {
    return this.http
        .get('/assets/config.json')
        .pipe(map((config: any) => {
          this.config = config;
        }) )
  } 

}
