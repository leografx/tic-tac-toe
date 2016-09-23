import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1> <span *ngIf="!winner">{{player}} TURN</span> {{winner}}</h1>
  <div>
    <button (click)="newGame()">Start new game</button>
  </div>
  <br/>
  <div class="game">
    <div (click)="play($event)" class="spot1">{{spot1}}</div>
    <div (click)="play($event)" class="spot2">{{spot2}}</div>
    <div (click)="play($event)" class="spot3">{{spot3}}</div>

    <div (click)="play($event)" class="spot4">{{spot4}}</div>
    <div (click)="play($event)" class="spot5">{{spot5}}</div>
    <div (click)="play($event)" class="spot6">{{spot6}}</div>

    <div (click)="play($event)" class="spot7">{{spot7}}</div>
    <div (click)="play($event)" class="spot8">{{spot8}}</div>
    <div (click)="play($event)" class="spot9">{{spot9}}</div>


  </div>

  `,
  styles:[
  ".winner{ color:red }",
  ".game div{ font-size:80px; text-align:center; line-height:100px; }",
  ".game{position:relative}",
  ".spot1{position:absolute; top:0px; width:100px; height:100px; border-left:0px solid #333;  border-right: 1px solid #333; border-bottom: 1px solid #333;}",
  ".spot2{position:absolute; top:100px; width:100px; height:100px; border-left:0px solid #333;  border-right: 1px solid #333; border-bottom: 1px solid #333;}",
  ".spot3{position:absolute; top:200px; width:100px; height:100px; border-left:0px solid #333;  border-right: 1px solid #333; border-bottom: 0px solid #333;}",
  
  ".spot4{position:absolute; left:100px; top:0px; width:100px; height:100px; border-left:0px solid #333;  border-right: 1px solid #333; border-bottom: 1px solid #333;}",
  ".spot5{position:absolute; left:100px; top:100px; width:100px; height:100px; border-left:0px solid #333;  border-right: 1px solid #333; border-bottom: 1px solid #333;}",
  ".spot6{position:absolute; left:100px; top:200px; width:100px; height:100px; border-left:0px solid #333;  border-right: 1px solid #333; border-bottom: 0px solid #333;}",

  ".spot7{position:absolute; top:0px; left:200px; width:100px; height:100px; border-left:0px solid #333;  border-right: 0px solid #333; border-bottom: 1px solid #333;}",
  ".spot8{position:absolute; top:100px; left:200px; width:100px; height:100px; border-left:0px solid #333;  border-right: 0px solid #333; border-bottom: 1px solid #333;}",
  ".spot9{position:absolute; top:200px; left:200px; width:100px; height:100px; border-left:0px solid #333;  border-right: 0px solid #333; border-bottom: 0px solid #333;}"

  ]
})
export class AppComponent {
  player = "X";
  spot1 = '';
  spot2 = '';
  spot3 = '';
  spot4 = '';
  spot5 = '';
  spot6 = '';
  spot7 = '';
  spot8 = '';
  spot9 = '';
  spot1D:boolean = true;
  winner:any;
  
  play(e:any){
    console.log(e.target.className);
    console.log(e);
   this[e.target.className] = this.player;
   var player = this.player+""+this.player+""+this.player;
   var winner = this.player +" WINS!"
   if(this.spot1+""+this.spot2+""+this.spot3===player){ this.winner=winner;

   }
   if(this.spot4+""+this.spot5+""+this.spot6===player){ this.winner=winner; }
   if(this.spot7+""+this.spot8+""+this.spot9===player){ this.winner=winner; }
   if(this.spot1+""+this.spot4+""+this.spot7===player){ this.winner=winner; }
   if(this.spot2+""+this.spot5+""+this.spot8===player){ this.winner=winner; }
   if(this.spot3+""+this.spot6+""+this.spot9===player){ this.winner=winner; }
   if(this.spot1+""+this.spot5+""+this.spot9===player){ this.winner=winner; }
   if(this.spot3+""+this.spot5+""+this.spot7===player){ this.winner=winner; }
   
   console.log(this.spot1,this.spot2,this.spot3,"===",player);
   this.player=(this.player=="X")? "O":"X";

  }

  newGame(){
     window.location.replace("/");
  }
}


