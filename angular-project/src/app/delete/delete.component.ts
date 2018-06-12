import {Component, OnInit} from '@angular/core';
import {Person} from '../person';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

    msg = '';


    constructor(private http: HttpClient) { }

  ngOnInit() {
  }


    onclick(id: string) {


        if (id !== '') {
            this.msg = `Hello, ${id}!!`;
        } else {
            this.msg = 'You missed input. Please retry.';
            return;
        }

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
            })
        };

        this.http.post<string>('http://localhost:9000/delete', JSON.stringify({'id': id}), httpOptions)
            .subscribe(
                (res) => console.log(res),
                (error) => console.log(error)
            );


    }



}
