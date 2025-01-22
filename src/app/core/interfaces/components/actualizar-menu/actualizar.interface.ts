import {InputInfo} from "../forms/basic-form/basic-form.interface";
import {CrearMenuColumns} from "../menu/menu.interface";
import {Validators} from "@angular/forms";

export const ActualizarMenuInputs: InputInfo[] = [
  {
    label: 'Menu Padre',
    type: 'modal-input',
    labelFor: '',
    formControlName: 'menu_padre_id',
    placeholder: '',
    validators: [],
    modalInput:{
      label: 'Selecciona menu padre',
      dataUri: 'security/menu/parents/1',
      filterKey: 'nombre',
      labelKey: 'nombre',
      formKey: 'MenuID',
      placeholder: 'Selecciona menu padre',
      tableColumn: CrearMenuColumns,
      disable: false
    }
  },
  {
    label: 'Nombre',
    type: 'text',
    labelFor: 'nombre',
    formControlName: 'nombre',
    placeholder: 'Nombre',
    validators: [Validators.required]
  },
  {
    label: 'Descripción',
    type: 'text',
    labelFor: 'descripcion',
    formControlName: 'descripcion',
    placeholder: 'Descripcion',
    validators: [Validators.required]
  },
  {
    label: 'icono',
    type: 'text',
    labelFor: 'icono',
    formControlName: 'icono',
    placeholder: 'Selecciona el icono',
    validators: [Validators.required]
  },
]
