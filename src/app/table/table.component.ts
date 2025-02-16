import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TableData {
  avatar: string;
  client: string;
  appointmentDate: string;
  cancellationDate: string;
  responsible: string;
  localMinutes: number;
  internationalMinutes: number;
  total: string;
}

@Component({
  selector: 'app-number-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class NumberTableComponent implements OnInit {
  data: TableData[] = [
    {
      avatar: 'src/assets/images/avatar.jpg',
      client: 'الشركة الألمانية للإبادة',
      appointmentDate: '01/12/2024',
      cancellationDate: '_',
      responsible: 'عبدالرحيم إسماعيل ناصف',
      localMinutes: 7654,
      internationalMinutes: 122,
      total: '61890 ج.م',
    },
    {
      avatar: 'src/assets/images/avatar.jpg',
      client: 'الشركة الألمانية للإبادة',
      appointmentDate: '01/12/2024',
      cancellationDate: '01/12/2024',
      responsible: 'عبدالرحيم إسماعيل ناصف',
      localMinutes: 7654,
      internationalMinutes: 122,
      total: '61890 ج.م',
    },
    {
      avatar: 'src/assets/images/avatar.jpg',
      client: 'الشركة الألمانية للإبادة',
      appointmentDate: '01/12/2024',
      cancellationDate: '01/12/2024',
      responsible: 'عبدالرحيم إسماعيل ناصف',
      localMinutes: 7654,
      internationalMinutes: 122,
      total: '61890 ج.م',
    },
    {
      avatar: 'src/assets/images/avatar.jpg',
      client: 'الشركة الألمانية للإبادة',
      appointmentDate: '01/12/2024',
      cancellationDate: '01/12/2024',
      responsible: 'عبدالرحيم إسماعيل ناصف',
      localMinutes: 7654,
      internationalMinutes: 122,
      total: '61890 ج.م',
    },
  ];

  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 55;
  pages: number[] = [];
  paginatedData: TableData[] = [];

  ngOnInit() {
    this.calculatePages();
    this.updatePaginatedData();
  }

  setPage(page: number) {
    if (page < 1 || page > this.pages.length) return;
    this.currentPage = page;
    this.updatePaginatedData();
  }

  onItemsPerPageChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.itemsPerPage = parseInt(select.value);
    this.currentPage = 1; // Reset to first page
    this.calculatePages();
    this.updatePaginatedData();
  }

  private calculatePages() {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  private updatePaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.data.slice(startIndex, endIndex);
  }
}
