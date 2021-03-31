import { Component, OnInit, Input } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-toasts',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Input() toastsTime: number
  @Input() toastsStatus: string

  ngOnInit(): void {
    
  }

  ngOnChanges() {
    console.log('ngOnChanges: ')
    this.action(this.toastsTime, this.toastsStatus)
  }

  action(toastsTime: number, toastsStatus: string) {
    console.log('Time get: ', toastsTime)
    console.log('Status get: ', toastsStatus)
  }

}
