import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    main: string = 'main';
    add: string = 'add';
    delete: string = 'delete';
    update: string = 'update';

    constructor(private router: Router,
                private http: HttpClient) {

    }

    ngOnInit() {
        this.http.get('http://localhost:9000/getkey')
            .subscribe(
                (res) => { console.log(res); },
                (error) => { console.log(error); }
            );
    }

    onMainButtonClick(): void {
        // this.title = 'ボタン押したよ!';
        this.router.navigate(['/main']);
    }
    onAddButtonClick(): void {
        // this.title = 'ボタン押したよ!';
        this.router.navigate(['/add']);
    }

    onDeleteButtonClick(): void {
        // this.title = 'ボタン押したよ!';
        this.router.navigate(['/delete']);
    }

    onUpdateButtonClick(): void {
        // this.title = 'ボタン押したよ!';
        this.router.navigate(['/update']);
    }

}
