import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'James', age: 23, job: 'Designer', employed: true },
    { name: 'Joemar', age: 31, job: 'Programmer', employed: true },
    { name: 'Jane', age: 27, job: 'Writer', employed: false },
    { name: 'Reymar', age: 19, job: 'Programmer', employed: true },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Working?' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
