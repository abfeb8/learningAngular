import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() cls!: string;
  @Output() btnClick = new EventEmitter();
  baseClass: string = "btn";

  constructor() { }

  ngOnInit(): void {
    this.baseClass = this.cls + " " + this.baseClass;
  }

  onClick() {
    this.btnClick.emit();
  }
}
