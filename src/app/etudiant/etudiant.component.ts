import { Component,EventEmitter,Input,OnInit, Output, } from "@angular/core";
@Component({
  selector: 'app-etudiant',
  templateUrl:'./etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
 } )
 export class EtudiantComponent implements OnInit {
  @Input()questiondeMonEnseignant!: string;
  @Output()reponseFinale =new EventEmitter<string>();
  reponseEtudiant : string = "";

  constructor(){

  }
  ngOnInit(): void {
   
  }
  envoieReponse(){
    this.reponseFinale.emit(this.reponseEtudiant);
  }
 }

function ngOInit() {
  throw new Error("Function not implemented.");
}
function envoieReponse() {
  throw new Error("Function not implemented.");
}

