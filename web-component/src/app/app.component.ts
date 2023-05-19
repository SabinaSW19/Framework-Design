import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-component';
  photos = ['../../assets/persian.png', '../../assets/egyptian.png', '../../assets/mainecoon.png', '../../assets/russian.png',
    '../../assets/turkish.png', '../../assets/bombay.png', '../../assets/scottish.png', '../../assets/siamese.png',
    '../../assets/norwegian.png', '../../assets/bengal.png'];
  titles = ['Persian cat', 'Egyptian Mau cat', 'Maine Coon cat', 'Russian Blue cat', 'Turkish Angora cat', 'Bombay cat',
    'Scottish Fold cat', 'Siamese cat', 'Norwegian Forest cat', 'Bengal cat'];
  about = ['This is the BEST cat', 'This cat is regal', 'This cat is huge', 'This cat is simply gorgeous', 'This cat is so fluffy', 'This cat could belong to a witch',
    'This cat has funny ears', 'This cat sings songs in animated movies', 'This cat looks like it is the boss of all cats', 'This cat is potentially related to tigers'];
}
