import { Component, OnInit } from '@angular/core';
const testData = '../../assets/test_data';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})
export class HomescreenComponent {
  public testData = JSON.stringify(testData);
}
