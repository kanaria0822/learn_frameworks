import { Component, OnInit } from '@angular/core';
import {Person} from '../person';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {RequestOptions, RequestOptionsArgs} from '@angular/http';
import {PushService} from '../service/push.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

    msg = '';


    constructor(private http: HttpClient, private push: PushService) { }

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
                    'Content-Type':  'application/json',
                })
            };

            this.http.post<Person>('http://localhost:9000', JSON.stringify(person), httpOptions)
                .subscribe(
                    (res) => console.log(res),
                    (error) => console.log(error));

            this.push.displayNotification(
                'Yeah,Add' + person.toString(),
                'Add person',
                'http://localhost:4200/add',
                'https://hiyokoyarou.com/wp-content/uploads/2017/04/iconpittari.png',
                5000);
        }

    }





}
