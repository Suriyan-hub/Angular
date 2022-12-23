import { style } from '@angular/animations';
import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome {{ name }}</h2>
    <h2>{{ 2 + 2 }}</h2>
    <h2>{{ 'Welcome ' + name }}</h2>
    <h2>{{ name.length }}</h2>
    <h2>{{ name.toUpperCase() }}</h2>
    <h2>{{ greetUser() }}</h2>
    <h2>{{ siteurl }}</h2>
    <input [id]="myid" type="text" value="Suriya" />
    <input [disabled]="isDisabled" id="{{ myid }}" type="text" value="Suriya" />
    <input
      bind-disabled="isDisabled"
      id="{{ myid }}"
      type="text"
      value="Suriya"
    />
    <h2 class="text-danger text-special">Welcome Angular</h2>
    <h2 [class]="successClass">Welcome Angular</h2>
    <h2 class="text-special" [class]="successClass">Welcome Angular App</h2>
    <h2 [class.text-danger]="hasError">Resources</h2>
    <h2 [ngClass]="messageClasses">Life is Beautiful</h2>
    <h2 [style.color]="'purple'">Style Binding</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">
      Style Binding Conditional statement
    </h2>
    <h2 [style.color]="highlightcolor">Style Binding using property</h2>
    <h2 [ngStyle]="titleStyles">Style Binding using objects</h2>
  `,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class TestComponent {
  public name = 'Suriya';
  public myid = 'testid';
  public isDisabled = false;
  public siteurl = window.location.href;
  public successClass = 'text-success';
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    'text-success': this.hasError,
    'text-danger': !this.hasError,
    'text-special': this.isSpecial,
  };
  public highlightcolor = 'orange';
  public titleStyles = {
    fontStyle: 'italic',
    color: 'orange',
  };
  greetUser() {
    return 'Hello ' + this.name;
  }
}
