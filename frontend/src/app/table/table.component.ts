import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TableService } from './table.service';
// import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  content: Array<object>;
  formCadastrarFuncionario = this.formBuilder.group({
    name: ['', Validators.required],
    customer: ['', Validators.required],
    email: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private service: TableService // private searchFilter: SearchComponent
  ) {
    this.service.list().subscribe((res) => {
      // Atribuindo valor ao content
      this.content = res.user;

      // Atribuindo "ID" de acordo com a resposta da API
      this.content.forEach((item, index) => (item['id'] = index));

      // Ordenando por "empresa" (atributo customer)
      this.content.sort(this.ordenarPorEmpresa);
    });
  }

  ordenarPorEmpresa(a, b) {
    if (a.customer < b.customer) {
      return -1;
    }
    if (a.customer > b.customer) {
      return 1;
    }
    return 0;
  }

  aplicarFiltro() {
    this.content.filter((content) => console.log(content));
  }

  cadastrarUsuario() {
    const formValue = this.formCadastrarFuncionario.value;

    if (this.validarForm(formValue)) {
      this.service.create(formValue).subscribe((res) => {
        console.log(res);
        formValue.name = '';
        formValue.customer = '';
        formValue.email = '';
      });
    }
  }

  validarForm(formValue) {
    formValue = this.formCadastrarFuncionario.value;

    if (formValue.name === '') {
      return false;
    }
    if (formValue.customer === '') {
      return false;
    }
    if (formValue.email === '') {
      return false;
    }
    return true;
  }

  onEmit(event) {
    console.log(event);
  }
}
