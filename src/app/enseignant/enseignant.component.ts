import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.scss']
})
export class EnseignantComponent implements OnInit {
 question!: string;
  reponse!: string;
  message!:string;  
  

constructor(){

}
ngOnInit(): void {
  this.question ='quel est le language de programmation pour developper une application angular?'
  this.reponse ='typeScript'
}
correction (reponseEtudiant:string){
  if (this.reponse===reponseEtudiant){
    this.message = 'bravo';

  }else this.message ='il ya erreur';

  }

}

//}
//}