import { NgModule, Component, OnInit, Injectable, Inject, forwardRef, Input, Output, EventEmitter, OnChanges, AfterContentInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
declare var c3;

@Component({
    selector: 'line-chart',
    template: ` 
    <ng-select name="contacts" [items]="items"  placeholder="Select One or More" appendTo="body"
    bindLabel="name" [(ngModel)]="selectedContacts" (change)=changeOptions($event)>
  </ng-select>

    <button class="btn btn-default" (click)="generate()">GET DATA</button> 
    <button class="btn btn-default" (click)="closed()">CLOSE</button>  
    <div id="chart_{{index}}"></div>


<div>

<table class="table table-striped">
    <thead>
      <tr>
        <th class="text-center">Id</th>
        <th class="text-center">Name</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let doc of docs | paginate: { itemsPerPage: pageInfo.pageSize, 
        currentPage: pageInfo.pageNumber,
        id: pageInfo.pagingId}; let $i = index">
        <td>{{doc.id}}</td>
        <td>{{doc.text}}</td>
      </tr>     
    </tbody>
  </table>
</div>

<div class="text-center"  style="margin-top: 10px;">
    <pagination-controls (pageChange)="pageInfo.pageNumber = $event" id="{{index}}"></pagination-controls>
</div>


    `,
})
export class LineComponent implements OnInit, AfterViewInit {
    @Input() index: any;
    @Output() close: EventEmitter<any> = new EventEmitter<any>();
    contacts: [{
        id: 1,
        name: 'test 1'
    }, {
            id: 2,
            name: 'test 2'
        }]
    constructor(
        @Inject(forwardRef(() => HttpClient)) private http
    ) { }
    selectedContacts: any = {
        id: 1,
        name: 'test 1'
    };

    items: Array<any> = [{
        id: 1,
        name: 'test 1'
    }, {
        id: 2,
        name: 'test 2'
    }];
    pageInfo = {
        pageSize:5,
        pageNumber:1,
        pagingId :this.index
    }

    
    docs = [
        {id:'1121s2ew',text:'name 1'},
        {id:'22d21s2ew',text:'name 2'},
        {id:'3321s2ew',text:'name 3'},
        {id:'4121s2ew',text:'name 4'},
        {id:'5121s2ew',text:'name 5'},
        {id:'6121s2ew',text:'name 5'},
        {id:'7121s2ew',text:'name 6'},
        {id:'8121s2ew',text:'name 7'},
        {id:'8121s2ew',text:'name 8'},
        {id:'9121s2ew',text:'name 9'},
        {id:'10121s2ew',text:'name 10'},
        {id:'11121s2ew',text:'name 11'},
        {id:'12121s2ew',text:'name 12'},
    ]
    ngAfterViewInit(): void {

    }


    ngOnInit() {
        const bindValue = '#chart_' + this.index;
      this.one([
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
      ], bindValue);
      this.pageInfo.pagingId = this.index;                        
  
    }

    data: any;
    closed() {
        this.close.emit(this.selectedContacts)
    }
    changeOptions(event) {
       // this.one(event)
    }
    generate() {
        const bindValue = '#chart_' + this.index;
        const data = [
            ['data1', 30, 200, 100, 400, 150, 250]
        ]
        this.one(data, bindValue);
    }
    one(event, bindValue) {
     //   console.log(bindValue)

        let chart = c3.generate({
            bindto: bindValue,
            data: {
                columns: event
            }
        });

        this.http.get('https://reqres.in/api/users?page=2').subscribe(re => {
            this.data = re;
        })
        let ser = new ConfigService();
        ser.getData(this.http);
        // console.log(ser.getData())

    }

}
//let _httpHandler = new HttpHandler();
@Injectable()
export class ConfigService {

    getData(http) {
        http.get('https://reqres.in/api/users?page=1').subscribe(re => {

        })
        console.log("one 123")
        return 'test';
        // this.http.get('tesr.html');
    }
}

@NgModule({
    declarations: [LineComponent],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        NgSelectModule,
        NgxPaginationModule
    ],
    providers: [
        //   HttpClient,
        ConfigService
    ]
})
export default class LineChartModule { }