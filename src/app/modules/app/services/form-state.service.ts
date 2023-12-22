import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormStateService {
  private formState: { [key: string]: any } = {};

  saveFormState(formName: string, state: any) {
    this.formState[formName] = state;
  }

  getFormState(formName: string): any {
    return this.formState[formName] || {};
  }

}
