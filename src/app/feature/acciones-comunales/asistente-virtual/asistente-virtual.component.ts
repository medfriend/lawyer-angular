import {Component, OnDestroy, OnInit} from "@angular/core";
import {StompService} from "../../../util/rabbitmq/stomp";
import {sharedModules} from "../../../shared/shared.module";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-asistente-virtual',
    templateUrl: './asistente-virtual.component.html',
    styleUrls: ['./asistente-virtual.component.scss'],
    imports: [...sharedModules, FormsModule],
    standalone: true
})
export default class AsistenteVirtualComponent implements OnDestroy, OnInit {

    newMessage: string = '';
    messages: any[] = [];

    constructor(
        private stompService: StompService
    ) {}


    ngOnInit(): void {
        this.stompService.send("chat-bot","cual es la capital de colombia")
    }

    sendMessage(): void {
        this.stompService.send("chat-bot", this.newMessage)
        this.newMessage = "";
    }

    ngOnDestroy(): void {
        this.stompService.disconnect()
    }

}