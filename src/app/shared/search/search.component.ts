import { Router } from '@angular/router';
import { CharacterService } from './../../core/services/character.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap,debounceTime, map } from 'rxjs/operators';

import { CharacterI } from '../../core/interfaces/character.interface';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search: FormControl = new FormControl('');
  templateEmpty: boolean = false;

  results: CharacterI[] = [];
  constructor(private characterService: CharacterService, private router: Router) {
    this.search.valueChanges.pipe(
      tap(() => (this.templateEmpty = true)),
      debounceTime(0) // tiempo que quieres que espere
    ).subscribe((entity: string) => {
     this.filterNameHeroe(entity);
    })
   }

  ngOnInit(): void {
  }

  filterNameHeroe(entity: string) {
    this.characterService.getFilter(entity).pipe().subscribe((data: any) => {
      if (data.data.results) {
        this.results = data.data.results.map((item: any) => {
          return {
            id: item.id,
            title: item.name,
            image: item.thumbnail.path+'.'+item.thumbnail.extension,
            description: item.description
          }
        })
      }else{
        this.results = [];
      }


      console.log(this.results);

    })
  }

  navigateDetail(id: number) {
    this.router.navigate(['detail-heroe'], {queryParams: {id: id}}),
    this.search.setValue('');
  }

}
