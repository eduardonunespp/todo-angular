import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-list-modal',
  templateUrl: './edit-list-modal.component.html',
  styleUrls: ['./edit-list-modal.component.scss']
})
export class EditListModalComponent implements OnInit {
  id!: string
  name!: string

  constructor(@Inject(MAT_DIALOG_DATA) private data: {id: string, name: string}){}

  ngOnInit(): void {
    this.id = this.data.id
    this.name = this.data.name
  }

}
