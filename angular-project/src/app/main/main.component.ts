import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {RequestOptions} from '@angular/http';
import {Person} from '../person';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

    url: string = 'http://localhost:9000';
    persons: Person[] = [];
    msg: string;
    name = '';

    constructor(private http: HttpClient) { }

    ngOnInit() {
    }


    getData(): void {

        this.persons = [];
        this.http.get(this.url).subscribe(
            (res: Array<any>) => {
                console.log(res);
                for (let i = 0; i < res.length; i++) {
                    let p = new Person(res[i]['name'], res[i]['id']);
                    this.persons.push(p);
                }
            },
            (err) => {
                console.log(err);
            },
            // () => {
            // }
        );
    }

    onclick(name: string): void {
        if (this.persons.length === 0) {
            this.msg = 'No persons.';
            return;
        } else {
            this.msg = 'Yeah!';
        }

        this.name = '';
    }


}
