import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class NotifService {

  constructor(private message: NzMessageService) {}

  emitSuccess(msg: string): void {
    this.message.success(msg)
  }

  emitError(msg:string): void {
      this.message.error(msg);
  }
}
