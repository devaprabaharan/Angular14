import { Component, OnInit, Input } from '@angular/core';
import { Well } from '../well';

@Component({
  selector: 'app-well-detail',
  templateUrl: './well-detail.component.html',
  styleUrls: ['./well-detail.component.css']
})
export class WellDetailComponent implements OnInit {

  @Input() well:Well | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
