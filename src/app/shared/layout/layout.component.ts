import { LoaderService } from './../../core/services/loader.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  status: boolean = false;
  constructor(
    private spinner: NgxSpinnerService,
    private loaderServices: LoaderService
  ) {}

  ngOnInit(): void {
    this.loaderServices.status.subscribe((data) => {
      this.status = data;
      if (this.status) {
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    });
  }
}
