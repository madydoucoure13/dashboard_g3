import { Component } from '@angular/core';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { DomSanitizer } from '@angular/platform-browser';


export interface Fruit {
  name: string;
}


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  imgsrc = '../../assets/avatar.png';
  imgsrcAbout = '../../assets/about.png';
  imgsrcMen = '../../assets/product-11.jpg';
imgsrcWomen = '../../assets/product-1.jpg';
imgsrcChild = '../../assets/product-0.jpg';

  constructor(
    public _d: DomSanitizer
  ) { }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  networkSocials: Fruit[] = [{name: 'facebook'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.networkSocials.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.networkSocials.indexOf(fruit);

    if (index >= 0) {
      this.networkSocials.splice(index, 1);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.networkSocials.indexOf(fruit);
    if (index >= 0) {
      this.networkSocials[index].name = value;
    }
  }
  fileChange(e:any) {
    const file = e.srcElement.files[0];
    this.imgsrc = window.URL.createObjectURL(file); 
  }
}
