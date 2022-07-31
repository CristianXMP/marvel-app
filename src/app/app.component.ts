import { Component, OnInit } from '@angular/core';
import { CharacterService } from './core/services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'marvel-app';

  constructor(private characterService: CharacterService) {

  }

  ngOnInit(): void {

  }

  getAllCaracters(): any {
    this.characterService.getAll().pipe().subscribe((data: any) => {
      console.log(data.data.results);

    });
  }
}
