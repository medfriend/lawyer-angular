import {Component, OnInit} from "@angular/core";
import {sharedModules} from "../../../../shared/shared.module";
import {BasicFormComponent, ToastService} from "../../../../components";
import {Router} from "@angular/router";
import {inputsCrearTutela} from "../../../../core/interfaces/components/crear-tutela/crear-tutela.interface";
import {Subject, takeUntil} from "rxjs";
import {StompService} from "../../../../util/rabbitmq/stomp";

@Component({
    templateUrl: './crear-tutela.component.html',
    styleUrls: ['./crear-tutela.component.scss'],
    imports: [sharedModules, BasicFormComponent],
    standalone: true
})
export default  class CrearTutelaComponent implements OnInit{

    private destroy$ = new Subject<void>();
    inputs = inputsCrearTutela

    constructor(
        private router: Router,
        private stompService: StompService
    ) {}

    getMinioDownloadUrl(filePath: string): string {
        const baseUrl = 'http://localhost:9001/api/v1/buckets';

        const [bucket, ...fileParts] = filePath.split('/');
        const fileName = fileParts.join('/');

        return `${baseUrl}/${bucket}/objects/download?prefix=${encodeURIComponent(fileName)}`;
    }

    ngOnInit(): void {

        const userInfo = JSON.parse(<string>localStorage.getItem('userInfo'));

        this.stompService.subscribeToTopic(userInfo.usuario, (message) => {

            const fileUrl = this.getMinioDownloadUrl(message.body);
            window.open(fileUrl, '_blank');
            
        });

    }

    goBack() {
        return (): void => {
            this.router.navigate(['/home/tutela'])
        }
    }

    onSubmitHandler(){
        return (values: any, toast: ToastService): void => {

            const body = {
                "bucketOrigen":"plantillas",
                "bucketDestino":"tutelas",
                "plantilla":"tutela.html",
                ...values,
            }

            this.stompService.send("filemaker", JSON.stringify(body), "1053872338").then(r => {
                toast.addToast("Creando tutela", "success")
            })
        }
    }
}