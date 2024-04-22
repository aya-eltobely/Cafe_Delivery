import { Component } from '@angular/core';
import { MatDialogRef ,  MatDialogActions} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-order-onway',
  standalone: true,
  imports: [MatButtonModule,  MatDialogActions],
  templateUrl: './order-onway.component.html',
  styleUrl: './order-onway.component.scss'
})
export class OrderOnwayComponent {

  constructor(public dialogRef: MatDialogRef<OrderOnwayComponent>) {
  }

  onOnWay(){
    this.dialogRef.close(true)
  }

  onClose(){
    this.dialogRef.close(false)
  }
}
