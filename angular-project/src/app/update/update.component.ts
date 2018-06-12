import { Component, OnInit } from '@angular/core';
import {Person} from '../person';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

    msg = '';


    constructor(private http: HttpClient) { }

    ngOnInit() {

    }


    onclick(name: string, id: string) {

        let person: Person;

        if (name !== '' && id !== '') {
            this.msg = `Hello, ${id}:${name}!!`;
            person = new Person(name, id);
        } else {
            this.msg = 'You missed input. Please retry.';
        }

        if (person !== null) {

            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                })
            };

            this.http.post<Person>('http://localhost:9000/update', JSON.stringify(person), httpOptions)
                .subscribe(
                    (res) => console.log(res),
                    (error) => console.log(error));
        }
    }

}
