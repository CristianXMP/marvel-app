import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from 'src/app/core/services/character.service';

import { CharacterI } from './../../core/interfaces/character.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  characters: CharacterI[] = [];
  constructor(
    private characterService: CharacterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters() {
    this.characterService
      .getAll()
      .pipe()
      .subscribe((data: any) => {
        if (data.data.results) {
          this.characters = data.data.results.map((item: any) => {
            return {
              id: item.id,
              title: item.name,
              image: item.thumbnail.path + '.' + item.thumbnail.extension,
              description: item.description,
            };
          });
        } else {
          this.characters = [];
        }
      });
  }

  navigateDetail(id: number) {
    this.router.navigate(['detail-heroe'], { queryParams: { id: id } });
  }
}
