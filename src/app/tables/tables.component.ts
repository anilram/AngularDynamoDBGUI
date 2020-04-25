import { Component, OnInit } from '@angular/core';
import { TablesService } from '../service/data/tables.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})


export class TablesComponent implements OnInit {
  tables: string[];
  items: string[][] = [[]];
  cols: string[] = new Array();
  jsonItems: Map<string, string> = new Map();
  jsonView = false;
  tableView = true;
  plainView = false;
  attributes: Map<string, string>;
  constructor(private tablesService: TablesService, private activatedRoute: ActivatedRoute) { }
headers(list: any) {
    const columns = [];
    if (list != null) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < list.length; i++) {
        const row = list[i];
        for (const k in row) {
            if (columns.indexOf(k) === -1) {
                columns.push(k);
            }
        }
    }
    }


    return columns;
}


  ngOnInit() {
    const tableName = this.activatedRoute.snapshot.paramMap.get('tableName');
    this.tablesService.getTables().subscribe(response => this.tables = response );
    if ( tableName ) {
      this.tablesService.getItems(tableName).subscribe(response => {
        this.processTableContent(response);
      } );
      this.tablesService.getItemMetaData(tableName).subscribe(data => this.attributes = data);
    }
    this.activatedRoute.params.subscribe(params => {
      this.tablesService.getItems(params.tableName).subscribe(response => {
        this.processTableContent(response);
          } );
      this.tablesService.getItemMetaData(tableName).subscribe(data => this.attributes = data);
  });
  }

  private showJsonView() {
    this.jsonView = true;
    this.tableView = false;
    this.plainView = false;
  }

  private showTableView() {
    this.tableView = true;
    this.jsonView = false;
    this.plainView = false;
  }

  private showPlainView() {
    this.plainView = true;
    this.tableView = false;
    this.jsonView = false;
  }

  private getAttributes(event, tableName) {
    console.log(event);
    this.tablesService.getItemAttributes(tableName).subscribe(data => this.attributes = data);
    /*const board = document.createElement('span');
    board.className = 'containernew';

    const container = document.getElementsByClassName(tableName);
    container[0].innerHTML = "<div>"+this.attributes+"</span>"; */
  }

  private processTableContent(response) {
    this.jsonItems = response;
    this.cols = this.headers(response);
    this.items = [[]] ;
    for (let i = 0; i < response.length; i++) {
          this.items[i] = new Array();
          // tslint:disable-next-line: prefer-for-of
          for (let colIndex = 0; colIndex < this.cols.length; colIndex++) {
            let val = response[i][this.cols[colIndex]];
            val = val ? val : val === 0 ? val : '-';
            val = JSON.stringify(val, null, ' ').split('"').join('');
            this.items[i].push(val);
        }
    }
  }

  private saveTable(tableName: string, item: Map<string, any>) {
    this.tablesService.getItemAttributes(tableName).subscribe(data => this.attributes = data);
  }

}
