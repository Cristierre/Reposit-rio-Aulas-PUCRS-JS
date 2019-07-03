import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlBase = 'https://jsonplaceholder.typicode.com/users';
  constructor(
    //injeção de dependência em uma variável no construtor
    private http: HttpClient
  ) { }
  buscarPorId(userId: number): Observable<User>{
      return this.http.get<User>(`${this.urlBase}/${userId}`);
  }
}
 