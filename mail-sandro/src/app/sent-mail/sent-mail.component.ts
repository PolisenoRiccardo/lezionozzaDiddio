import { Component, Input } from '@angular/core';
import { Email } from '../mail.model';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @Input() mailozza !: Email;
}
