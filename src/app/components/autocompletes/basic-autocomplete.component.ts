import {Component, Input} from "@angular/core";
import {sharedModules} from "../../shared/shared.module";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-basic-autocomplete',
  styleUrls: ['./basic-autocomplete.component.scss'],
  templateUrl: './basic-autocomplete.component.html',
  standalone: true,
  imports: [ [...sharedModules], ReactiveFormsModule ]
})
export class BasicAutocompleteComponent {
  @Input() onSelectHandler: (values: any) => void = () => {};
  @Input() suggestions: string[] = [];
  @Input() placeholder: string = 'Buscar';

  searchControl = new FormControl('');
  filteredItems: string[] = [];
  showSuggestions = false;

  filterList() {
    const searchTerm = this.searchControl.value?.toLowerCase() || '';
    this.filteredItems = this.suggestions.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );
  }

  selectItem(item: string) {
    this.searchControl.setValue(item);
    this.onSelectHandler(item)
    this.showSuggestions = false;
  }

  hideSuggestions() {
    setTimeout(() => {
      this.showSuggestions = false;
    }, 200);
  }
}

