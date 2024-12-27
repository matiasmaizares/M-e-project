import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() isVisible: boolean = false;
  @Input() title: string = 'Modal Title';
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.isVisible = false;
    this.closeModal.emit();
  }
}
