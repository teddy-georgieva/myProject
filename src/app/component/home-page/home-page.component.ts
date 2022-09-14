import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @Output() idEvent = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Form(){
    this.idEvent.emit();
    this.router.navigate([`${'form'}`]);
  }

}
