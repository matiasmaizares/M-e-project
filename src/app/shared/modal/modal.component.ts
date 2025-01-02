import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'], 
})
export class ModalComponent {
  @Input() isVisible: boolean = false;
  @Input() title: string = 'Modal Title';
  @Output() closeModal = new EventEmitter<void>();

  searchText: string = '';
  selectedAge: number | null = null;
  selectedZone: string = '';
  priceRange: [number, number] = [0, 1000];
  selectedType: string = '';

  zones: string[] = ['North', 'South', 'East', 'West'];
  types: string[] = ['Escort', 'Masajista', 'Trans / Travesti', ];

  close() {
    this.isVisible = false;
    this.closeModal.emit();
  }

  search() {
    const filters = {
      searchText: this.searchText,
      selectedAge: this.selectedAge,
      selectedZone: this.selectedZone,
      priceRange: this.priceRange,
      selectedType: this.selectedType,
    };
    console.log('Filters applied:', filters);
  }
}
