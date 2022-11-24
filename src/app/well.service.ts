import { Injectable } from '@angular/core';
import { Well } from './well';
import { WELLS } from './mock-wells';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class WellService {

  constructor(private messageService:MessageService) { }

  getWells():Observable<Well[]>{
    const wells = of(WELLS);
    this.messageService.add('WellService: wells fetched')
    return wells; 
  }
}
