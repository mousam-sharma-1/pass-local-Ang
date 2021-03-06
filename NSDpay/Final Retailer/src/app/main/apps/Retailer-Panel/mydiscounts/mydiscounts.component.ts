import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatAccordion} from '@angular/material';

@Component({
  selector: 'app-mydiscounts',
  templateUrl: './mydiscounts.component.html',
  styleUrls: ['./mydiscounts.component.scss']
})
export class MydiscountsComponent implements OnInit {

    displayedColumns: string[] = ['id', 'name', 'type', 'mobile', 'company', 'balance' , 'amt', 'money', 'child','retailer'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatAccordion) accordion: MatAccordion;
  
    ngOnInit() {
      this.dataSource.paginator = this.paginator;
    }
  }
  
  export interface PeriodicElement {
    id: number;
    name: string;
    type: string;
    mobile: number;
    company: string;
    balance: number;
    amt: number;
    money: string;
    child: string;
    retailer: string;

  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {id: 6492954840, name: 'Demo ID distributer', type: 'Distributer', mobile: 9654082489,company: 'demo name', balance: 32.71, amt:1245
, money: 'Send Money', child: 'View Child Larger', retailer: 'Show Retailer Details'}   
  ];