import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'td-header-auth',
  templateUrl: './header-auth.component.html',
  styleUrls: ['./header-auth.component.scss'],
})
export class HeaderAuthComponent implements OnInit {
  path: string = 'assets/todo-logo.svg';
  textLink!: string;
  @Input() toPage!: string;

  constructor(private router: Router) {}

  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {
    if (this.toPage === 'sign-up') {
      this.textLink = 'Não possui uma conta?';
    } else {
      this.textLink = 'Já possui uma conta?';
    }
  }
}
