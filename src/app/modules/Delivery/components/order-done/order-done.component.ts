import { Component } from '@angular/core';
import { MatDialogRef ,  MatDialogActions} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-order-done',
  standalone: true,
  imports: [MatButtonModule,  MatDialogActions],
  templateUrl: './order-done.component.html',
  styleUrl: './order-done.component.scss'
})
export class OrderDoneComponent {

  constructor(public dialogRef: MatDialogRef<OrderDoneComponent>) {
  }

  onDone(){
    this.dialogRef.close(true)
  }

  onClose(){
    this.dialogRef.close(false)
  }

}
