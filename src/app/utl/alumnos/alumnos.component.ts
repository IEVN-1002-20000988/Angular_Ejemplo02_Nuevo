import { Component, OnInit } from '@angular/core';
import { AlumnosUtl } from 'src/app/interfaces/utl';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})

export class AlumnosComponent implements OnInit{

  imageWidth:number=50
  imageMargin:number=2
  muestraImg:boolean=true
  listFilter:string=''
  alumnoTitle!:string
  dataSource:any=[]

  showImage():void{
    this.muestraImg=!this.muestraImg
  }

  alumnosIric:AlumnosUtl[]=[
    {
      matricula:1234,
      nombre:'pedro',
      apaterno:'lopez',
      amaterno:'muñoz',
      correo:'pedro@gmail.com'
    },
    {
      matricula:4321,
      nombre:'Juan',
      apaterno:'Gutierrez',
      amaterno:'Gutierrez',
      correo:'gutierritos@gmail.com'
    },
    {
      matricula:1000,
      nombre:'Herandez',
      apaterno:'Hernandez',
      amaterno:'Hernandez',
      correo:'Hernandez3@gmail.com'
    }
  ]

  ngOnInit(): void {
    this.dataSource=this.alumnosIric
  }
}
