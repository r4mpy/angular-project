import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit{
  @Input() questiondeMonEnseignant!: string;
constructor(){
}
ngOnInit():void{
  
}}

function ngOnInit(): void {
  throw new Error('Function not implemented.');
}
