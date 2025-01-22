import { CommonModule } from '@angular/common';
import { Component, Input, HostListener, ElementRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {sharedModules} from "../../../shared/shared.module";

@Component({
  selector: 'app-basic-popup',
  standalone: true,
  imports: [ ...sharedModules ],
  templateUrl: './basic-popup.component.html',
  styleUrl: './basic-popup.component.scss'
})
export class BasicPopupComponent {
  @Input() isActive: boolean = false
  @Input() translateX: number = -100
  @Input() translateY: number = 45

  showPopUp: boolean = false

  tooglePopup(){
    this.showPopUp = !this.showPopUp
  }

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.showPopUp = false;
    }
  }

}
