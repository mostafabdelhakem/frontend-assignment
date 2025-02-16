import { Component, Input } from '@angular/core';

interface creator {
  name: string;
  avatar: string;
}
interface time {
  date: string;
  time: string;
}

@Component({
  selector: 'app-number-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class NumberFooterComponent {
  @Input() creator: creator = {
    avatar: '/src/assets/images/avatar.jpg',
    name: 'مصطفي احمد عبدالحاكم',
  };

  @Input() time: time = {
    date: '01/12/2024',
    time: '▫️ 04:30',
  };
}
