import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password:string= '';
  includeLetters:boolean = false;
  includeNumbers:boolean = false;
  includeSymbols:boolean = false;
  length:number = 0

  onChangeLength(target:any){
    const parsedValue = parseInt(target.value)
    if(!isNaN(parsedValue)){
      this.length = parsedValue
    }
  }
  onButtonClick(){
    const numbers = '12345678901234567890123456'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!~#$%^&*()_+-!~#$%^&*()_+-'
    let validChar =''
    if(this.includeLetters){
      validChar += letters
    }
    if(this.includeNumbers){
      validChar += numbers
    }
    if(this.includeSymbols){
      validChar += symbols
    }
    let generaedPassword:string = ''
    for(let i=0 ; i< this.length ; i++){
        const index = Math.floor(Math.random()*validChar.length)
        generaedPassword += validChar[index]
    }
    this.password = generaedPassword
  }
  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters
  }
  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers
  }
  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols
  }
}
