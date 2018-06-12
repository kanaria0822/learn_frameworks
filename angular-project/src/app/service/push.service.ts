import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PushService {

  constructor() { }

  public displayNotification(body: string, title: string, link: string, icon: string, duration: number): void {


      link = link || null; // Link is optional
      icon = icon || null; // Link is optional
      duration = duration || 5000; // Default duration is 5 seconds

      const options = {
          body: body,
          icon: icon
      };

      let n = new Notification(title, options);

      if (link) {
          n.onclick = function () {
              window.open(link);
          };
      }

      setTimeout(n.close.bind(n), duration);
  }



}
