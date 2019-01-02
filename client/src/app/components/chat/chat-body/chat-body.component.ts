import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgScrollbar} from "ngx-scrollbar";

@Component({
    selector: 'app-chat-body',
    templateUrl: './chat-body.component.html',
    styleUrls: ['./chat-body.component.scss']
})
export class ChatBodyComponent implements OnInit, AfterViewInit {

    @ViewChild(NgScrollbar) scrollRef: NgScrollbar;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        this.scrollRef.scrollToBottom().subscribe()
    }

}
