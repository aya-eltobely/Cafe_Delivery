import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ToastrService } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Order } from '../../../../shared/Models/order';
import { OrderService } from '../../../../core/services/order.service';
import { CommonModule } from '@angular/common';
import { EgyCurrencyPipe } from '../../../../shared/pipes/egy-currency.pipe';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import { OrderOnwayComponent } from '../order-onway/order-onway.component';
import { OrderDoneComponent } from '../order-done/order-done.component';


import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { animate, state, style, transition, trigger } from '@angular/animations';
  
 


@Component({
  selector: 'app-order',
  standalone: true,
  imports: [MatAccordion,MatExpansionModule,MatSelectModule,MatChipsModule,EgyCurrencyPipe,CommonModule,MatPaginatorModule,MatTableModule,MatButtonModule,MatIconModule,MatMenuModule,MatFormFieldModule,FormsModule,ReactiveFormsModule,MatInputModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
  animations: [
    trigger('collapseExpand', [
      state('collapsed', style({
        height: '0',
      })),
      state('expanded', style({
        height: '*',
      })),
      transition('collapsed <=> expanded', animate('400ms ease-in')),
    ]),

  ],



})
export class OrderComponent implements OnInit, AfterViewInit {

  
  allOrder!:Order[];

  selectForm !: FormGroup;

  isCollapsed : boolean = true;
  state : string='collapsed' 

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  displayedColumns: string[] = ['id','userFullName','date','orderTotals','address','deliveryStatus','actions'];

  dataSource = new MatTableDataSource<Order>(this.allOrder);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private orderService:OrderService,private dialog: MatDialog,private toastr:ToastrService,private FB:FormBuilder) {
  }


  ngOnInit(): void {
    this.inatializeSelectFrom()

    this.getAllOrder()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  getAllOrder()
  {
    this.orderService.getAllOrder(1).subscribe( (res:any) => 
      {
        this.dataSource.data=res
      })

  }


  inatializeSelectFrom()
  {
    this.selectForm = this.FB.group(
      {
        selctedValue : [null]
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSelectChange(event: any): void {
    
    console.log(this.selectForm.get("selctedValue")?.value);

    this.orderService.getAllOrder(this.selectForm.get("selctedValue")?.value).subscribe( (res:any) => 
      {
        this.dataSource.data=res
      })

  }


  onWay(id:number)
  {

    const dialogRef = this.dialog.open(OrderOnwayComponent, {
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.orderService.onWayOrder(id).subscribe( (res:any) => 
        {
          this.toastr.success(res.message)
          this.getAllOrder()
        } )
      }
    });

  }


  onDone(id:number)
  {
    const dialogRef = this.dialog.open(OrderDoneComponent, {
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {

        this.orderService.doneOrder(id).subscribe( (res:any) => 
        {
          this.toastr.success(res.message)
          this.getAllOrder()
        } )
        
      }
    });

  }


  toggle()
  {
    // this.isCollapsed = ! this.isCollapsed;
    this.state = (this.state === 'collapsed' ? 'expanded' : 'collapsed' );
  }

}