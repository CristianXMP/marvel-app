import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private endPoint: string = '';

  private endPointDetail: string = '';
  private paginator: string = '';

  constructor(private http: HttpClient) {
    this.endPoint = `${environment.baseUrl}characters`;
    this.endPointDetail = `&ts=${environment.ts}&apikey=${environment.publicKey}&hash=${environment.hash}`;
    this.paginator = `?limit=100&offset=0`;
  }
  // get all heroes
  getAll() {
    return this.http.get<any[]>(
      `${this.endPoint}${this.paginator}${this.endPointDetail}`
    );
  }
  //filter heroe
  getFilter(entity: string) {
    return this.http.get<any[]>(
      `${this.endPoint}?nameStartsWith=${entity}${this.endPointDetail}`
    );
  }
  //get by id

  getById(id: number) {
    return this.http.get<any[]>(
      `${this.endPoint}/${id}?${this.endPointDetail}`
    );
  }
}
