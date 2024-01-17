import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'td-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPasswordComponent),
      multi: true,
    }
  ]
})
export class InputPasswordComponent {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() hasError: boolean = false;
  @Input() errorMsg: string = '';
  @Input() iconTemplate: any
  @Input() placeholder: string = ''

  visibility: boolean = false
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

  handleVisibilityInput(): void{
    this.visibility = !this.visibility
  }
}
