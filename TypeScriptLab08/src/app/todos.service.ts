import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Todos} from './todos';
import { UserService } from './user.service';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private urlBase = 'http://jsonplaceholder.typicode.com/todos';
  constructor(
    private http: HttpClient,
    private userServic: UserService
  ) { }
  buscarTodos(): Observable<Todos[]>{
     return this.http.get<Todos[]>(`${this.urlBase}`).pipe(
       map(res => res || []),
       catchError(this.tratadorErros)
     )
  }

  buscarPorUserId(userId: number): Observable<Todos[]>{
    return this.http.get<Todos[]>(`${this.urlBase}/${userId}`).pipe(
      map(res => res || []),
      catchError(this.tratadorErros)
    )
  }

  cabecalhos = new HttpHeaders().set('Content-type','application/json');

  inserir(todo: Todos): Observable<Todos>{
      return this.http.post<Todos>(this.urlBase,todo,{headers: this.cabecalhos}).pipe(
        map(res => res || {} as Todos),
        catchError(this.tratadorErros)
      );
  }

  tratadorErros(erro: HttpErrorResponse){
    let mensagemErro = '';
    if(erro.error instanceof ErrorEvent){
      mensagemErro = erro.error.message;
    }else{
      mensagemErro = `Erro status: ${erro.status} - mensagem: ${erro.message}`;
    }
    return throwError(mensagemErro);
  }
}
