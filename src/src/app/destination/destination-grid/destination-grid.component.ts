import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

import { faker } from '@faker-js/faker';

import { DestinationModel } from '../../model/model';
import {
  DestinationItemComponent,
} from '../destination-item/destination-item.component';

@Component({
  selector: 'app-destination-grid',
  standalone: true,
  imports: [CommonModule, DestinationItemComponent],
  templateUrl: './destination-grid.component.html',
})
export class DestinationGridComponent {
  DetionationArr: DestinationModel[] = []
  quantity = 6;

  ngOnInit(): void {
    for(let i = 0; i < this.quantity; i++){
      this.DetionationArr.push({
          id: uuidv4(),
          name: faker.location.city(),
          description: "night average",
          price: faker.number.int({min: 50, max: 300}),
          properties: faker.number.int({min: 10, max: 200}),
          image: faker.image.url(),
      })
    }
  }
}

// price: faker.number.float({min: 50, max: 300, fractionDigits: 2}),

