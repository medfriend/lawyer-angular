import {Validators} from "@angular/forms";
import {InputInfo} from "../forms/basic-form/basic-form.interface";
import {TableColumn} from "../table/basic-table/basic-table.interface";

export const inputsCrearTutela: InputInfo[] = [
    {
        label: 'nombre completo',
        type: 'text',
        labelFor: '[Nombre completo]',
        formControlName: '[Nombre completo]',
        placeholder: '',
        validators: [Validators.required, Validators.minLength(2)]
    },
    {
        label: 'dirrecion completa',
        type: 'text',
        labelFor: '[Dirección completa]',
        formControlName: '[Dirección completa]',
        placeholder: '',
        validators: [Validators.required, Validators.minLength(2)]
    },
    {
        label: 'numero de identicacion',
        type: 'number',
        labelFor: '[Número de cédula]',
        formControlName: '[Número de cédula]',
        placeholder: '',
        validators: [Validators.required]
    },
    {
        label: 'ciudad de expedicion',
        type: 'text',
        labelFor: '[Ciudad de expedición]',
        formControlName: '[Ciudad de expedición]',
        placeholder: '',
        validators: [Validators.required, Validators.minLength(2)]
    },
    {
        label: 'nombre de la entidad',
        type: 'text',
        labelFor: '[Nombre de la entidad o persona accionada]',
        formControlName: '[Nombre de la entidad o persona accionada]',
        placeholder: '',
        validators: [Validators.required, Validators.minLength(3)]
    }
];

export const Tutelacolumns: TableColumn[]  = [
    { header: 'Estado', field: 'activo' },
    { header: 'Usuario', field: 'usuario' },
    { header: 'Primer nombre', field: 'nombre_1', foldable: true, overflow: true },
    { header: 'Segundo nombre', field: 'nombre_2' },
    { header: 'Apellido Paterno', field: 'apellido_paterno' },
    { header: 'Apellido Materno', field: 'apellido_materno' },
    { header: 'Email', field: 'email' },
    { header: 'Fecha de Creación', field: 'fecha_creacion', date: true },
];
