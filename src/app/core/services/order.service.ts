import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl = `http://cafe.runasp.net/api/Delivery/Order`;
// commentt
  constructor(private http:HttpClient) { }

  getAllOrder(selectedOrder:number)
  {
    return this.http.get(this.apiUrl+`/${selectedOrder}`);
  }

  onWayOrder(id:number)
  {
    return this.http.get( this.apiUrl+`/onWay/${id}`)
  }

  doneOrder(id:number)
  {
    return this.http.get(this.apiUrl+`/done/${id}`);
  }

}
