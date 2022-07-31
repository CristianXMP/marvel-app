import { CharacterI } from './../../core/interfaces/character.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  characerId: number = 0;
  character: CharacterI = {id: null, title:'', description:'', image:'', urls: []};
  constructor(private activatedRoute: ActivatedRoute, private characterService: CharacterService, private router: Router) {
    this.activatedRoute.queryParams.subscribe((params)=>{
      this.characerId = params['id'];
      this.getCharacter(this.characerId);
    });
  }

  ngOnInit(): void {


  }

  getCharacter(id: number) {
    this.characterService.getById(id).subscribe((data: any)=> {
      this.character = data.data.results.map((item: any) => {
        return {
          id: item.id,
          title: item.name,
          image: item.thumbnail.path+'.'+item.thumbnail.extension,
          description: item.description,
          urls: item.urls
        }
      })[0];

      console.log(this.character);
    })

  }

  back() {
    this.router.navigate(['/'])
  }

}
