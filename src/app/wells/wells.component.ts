import { Component, OnInit } from '@angular/core';
import { Well } from '../well';
import { WellService } from '../well.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-wells',
  templateUrl: './wells.component.html',
  styleUrls: ['./wells.component.css']
})
export class WellsComponent implements OnInit {

  wells: Well[] = [];
  selectedWell:Well | undefined;
  constructor(private  wellService:WellService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.wellService.getWells().subscribe((wells: Well[]) => this.wells = wells);
  }

  onWellSelect(well:Well){
    this.selectedWell = well;
    this.messageService.add(`Well ${this.selectedWell.name} is selected`);

  }



}
