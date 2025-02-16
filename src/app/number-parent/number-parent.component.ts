import { Component } from '@angular/core';
import { NumberHeaderComponent } from '../number-header/number-header.component';
import { NumberTableComponent } from '../table/table.component';
import { NumberFooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-number-parent',
  imports: [NumberHeaderComponent, NumberTableComponent, NumberFooterComponent],
  templateUrl: './number-parent.component.html',
  styleUrl: './number-parent.component.scss',
})
export class NumberParentComponent {}
