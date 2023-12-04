import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() hasError: boolean = false;
  @Input() errorMsg: string = '';
  @Input() cols: string = '30'
  @Input() rows: string = '10'
  @Input() disabled: boolean = false

  value: any;

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {}

  ngOnInit() {}

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Implemente a lógica para definir o estado desabilitado, se necessário
  }

  onInputChange(event: any) {
    this.value = event.target.value;
    this.onChange(this.value);
    this.onTouched();
  }
}
