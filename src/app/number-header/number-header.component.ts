import { Component, Input, OnInit } from '@angular/core';

interface CountryInfo {
  name: string;
  flag: string;
}

interface ClientInfo {
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-number-header',
  templateUrl: './number-header.component.html',
  styleUrls: ['./number-header.component.css'],
})
export class NumberHeaderComponent implements OnInit {
  isRtl: boolean = false;
  ngOnInit() {
    const lang = localStorage.getItem('lang') || 'en';
    this.isRtl = lang === 'ar';
  }

  @Input() protocolName: string = 'فودافون مصر';
  @Input() country: CountryInfo = {
    name: 'المملكة الأردنية الهاشمية',
    flag: 'src/assets/images/flag.jpg',
  };
  @Input() currentClient: ClientInfo = {
    name: 'الشركة الألمانية للإبادة',
    avatar: 'src/assets/images/company.png',
  };
  @Input() extensionsCount: string = '09';
  @Input() currentBalance: string = '5000 ج.م';
  @Input() clientBalance: string = '5000 ج.م';
  @Input() totalBalance: string = '5000 ج.م';
  @Input() lastRechargeDate: string = '2024/12/29';
  @Input() phoneNumber: string = '01234567890';
}
