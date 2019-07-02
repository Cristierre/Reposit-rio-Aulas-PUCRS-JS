import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms';
import { Pessoa } from 'src/pessoa';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
    pessoa:Pessoa = new Pessoa('Cristierre', 32,'3445675432','234.564.089.12',);

    cadastro = new FormGroup({
      nome: new FormControl(this.pessoa.nome,[Validators.required, Validators.maxLength(40),Validators.minLength(2)]),
      idade: new FormControl(this.pessoa.idade, [Validators.required, Validators.max(120), Validators.min(18)]),
      rg: new FormControl(this.pessoa.rg,[Validators.required, Validators.maxLength(10),Validators.minLength(10)]),
      cpf: new FormControl(this.pessoa.cpf,[Validators.required,Validators.minLength(11),Validators.minLength(10)])
    });
  constructor() { }
 
  ngOnInit() {

  }
  onSubmit(){
    console.log("Formulário Submetido!")
  }

}
