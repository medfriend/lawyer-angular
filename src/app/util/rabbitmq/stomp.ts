import { Injectable } from '@angular/core';
import { Client } from '@stomp/stompjs';

@Injectable({
    providedIn: 'root'
})
export class StompService {
    private client: Client;
    private connectedPromise: Promise<any>;

    constructor() {
        this.client = new Client({
            brokerURL: 'ws://127.0.0.1:15674/ws',  // Cambiar a la URL correcta y puerto de RabbitMQ
            connectHeaders: {
                login: 'guest',  // Usuario predeterminado de RabbitMQ
                passcode: 'guest',  // Contraseña predeterminada de RabbitMQ
            },
            debug: (str) => {
                console.log(str);
            },
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
            onConnect: () => {
                console.log('Connected');
                this.connectedPromise = Promise.resolve(true);
            },
            onStompError: (frame) => {
                console.error('Broker reported error: ' + frame.headers['message']);
                console.error('Additional details: ' + frame.body);
            }
        });

        this.client.activate();
    }

    async send(destination: string, body: string): Promise<void> {
        await this.connectedPromise;  // Asegura que la conexión esté establecida
        this.client.publish({destination, body});
    }

    disconnect() {
        if (this.client.active) {
            this.client.deactivate();
        }
    }
}