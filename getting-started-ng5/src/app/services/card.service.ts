import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CardService {

  constructor(private http: HttpClient) { }
 
  get() {
    return this.http.get(`/notes.json`);
  }

  add(payload) {
    return this.http.post(`/notes.json`, {text: trim(payload)});
  }

  remove(payload) {
    return this.http.delete(`/notes/${payload.id}.json`);
  }

  update(payload) {
    return this.http.patch(`/notes/${payload.id}.json`, payload);
  }
}