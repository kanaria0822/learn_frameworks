import { Component } from '@angular/core';
import {SwPush} from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    private readonly API_URL: string = 'http://localhost:9000';

    readonly VAPID_PUBLIC_KEY = 'BMuiYh-azYtUzhIEzZFBTB4m0KABrtrQ2dEgeJJBgYZFIQWB-xsaJZUsfbuXpEqsEfoT--afEgw1xL0ttPT-bfQ=';


    private snackBarDuration: number = 2000;

    constructor(private swPush: SwPush) {
        this.swPush.requestSubscription({
            serverPublicKey: this.VAPID_PUBLIC_KEY
        }).then((pushSubscription: PushSubscription) => {
            const url = this.API_URL + '/webpush';
            console.log('[Push Service] Adding subscriber');

            // endpointとp256dhとauthを取得する
            console.log('endpoint: ' + pushSubscription.endpoint);
            console.log('userVisibleOnly: ' + pushSubscription.options.userVisibleOnly);

            const appServerKey: string
                = btoa(String.fromCharCode.apply(null, new Uint8Array(pushSubscription.options.applicationServerKey)));
            console.log('applicationServerKey: ' + appServerKey);

            const p256dh: string = btoa(String.fromCharCode.apply(null, new Uint8Array(pushSubscription.getKey('p256dh'))));
            const auth: string = btoa(String.fromCharCode.apply(null, new Uint8Array(pushSubscription.getKey('auth'))));
            console.log('p256dh: ' + p256dh);
            console.log('auth: ' + auth);


            const body = {
                action: 'subscribe',
                subscription: pushSubscription
            };

            // http.post(url, body).subscribe(
            //     (res) => {
            //         console.log('[App] Add subscriber request answer', res);
            //     },
            //     (err) => {
            //         console.log(err);
            //     }
            // );

        }).catch(err => console.log(err));

        this.swPush.messages.subscribe(
            (message) => {
                console.log('[App] Push message received', message);

                console.log('open');

                const options = {
                    body: '<p>' + message['message'] + '</p>',
                };
                const n = new Notification(message['title'], options);
                console.log(n.permission);

            }
        );


    }

    showMessages(): void {
        console.log('DDDDD');
        const options = {
            body: 'ok>',
        };
        const n = new Notification('a', options);
        setTimeout((() => {
            n.close();
        }), 5000);


    }




}
