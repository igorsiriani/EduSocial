import { Component } from '@angular/core';
import { StorageService } from './services/Storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: StorageService) {

  }

  ngOnInit() {
    this.storage.databaseCreate();
  }
}
