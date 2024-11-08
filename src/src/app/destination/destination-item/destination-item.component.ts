import {
  Component,
  Input,
} from '@angular/core';

import { DestinationModel } from '../../model/model';

@Component({
  selector: 'app-destination-item',
  standalone: true,
  imports: [],
  templateUrl: './destination-item.component.html',
})
export class DestinationItemComponent {
  @Input({ required: true }) Destination!: DestinationModel;
}
