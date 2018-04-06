import { Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators/map";
@Injectable()
export class ServicePublicar {
  constructor(private http: HttpClient) {}

  getpublicaciones(parametros: any): Observable<Object> {
    return this.http
      .post("http://localhost:8008/getPublicaciones", parametros)
      .pipe(map(response => response, error => error));
  }

  setpublicaciones(parametros: any): Observable<Object> {
    return this.http
      .post("http://localhost:8008/setPublicaciones", parametros)
      .pipe(map(response => response, error => error));
  }

  getPerfil(pUsuario: any): Observable<Object> {
    return this.http
      .post("http://localhost:8008/getPerfil", pUsuario)
      .pipe(map(response => response, error => error));
  }

  getChats(pUsuario: any): Observable<Object> {
    return this.http
      .post("http://localhost:8008/getChats", pUsuario)
      .pipe(map(response => response, error => error));
  }
}
