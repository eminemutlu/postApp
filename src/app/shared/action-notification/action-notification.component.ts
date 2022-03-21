


/**
 * Summary
 *
 * Description
 *
 * @author  Emine Yasenova
 * @version 1.0
 * @since   20/03/2022
 */

 import { Component, Inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'app-action-notification',
  templateUrl: './action-notification.component.html',
  styleUrls: ['./action-notification.component.scss']
})
export class ActionNotificationComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {

  }

}
