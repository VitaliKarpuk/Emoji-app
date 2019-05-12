import React, { Component} from 'react';
import emoji from '../emojiList'
let pushSymbols = [];
let pushTitle = [];
let arrResult = [];
let li= [];
export class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    
  }
  handleChange = event => {
    this.setState({
      value: event.target.value,
      }) 
  function Em(){
    for (let i=0; i < emoji.length; i++){
      let splitKeywords = emoji[i].keywords.split(' ')
      for (let j = 0; j < splitKeywords.length; j++){
        if(splitKeywords[j] === event.target.value ){
          arrResult.push(splitKeywords[j]);
          pushSymbols.push(emoji[i].symbol);
          pushTitle.push(emoji[i].title);
          li[0] = <li className='li'>{pushTitle[0]} {pushSymbols[0]} </li>
          li[1] = <li className='li' >{pushTitle[1]} {pushSymbols[1]}</li>
          li[2] = <li className='li' >{pushTitle[2]} {pushSymbols[2]}</li>
          li[3] = <li className='li' >{pushTitle[3]} {pushSymbols[3]}</li>
          li[4] = <li className='li' >{pushTitle[4]} {pushSymbols[4]}</li>
          li[5] = <li className='li' >{pushTitle[5]} {pushSymbols[5]}</li>
          li[6] = <li className='li' >{pushTitle[6]} {pushSymbols[6]}</li>
          li[7] = <li className='li' >{pushTitle[7]} {pushSymbols[7]}</li>
          li[8] = <li className='li' >{pushTitle[8]} {pushSymbols[8]}</li>
          li[9] = <li className='li' >{pushTitle[9]} {pushSymbols[9]}</li>
          for (let q =0; q < li.length; q++){
              if (li[q].props.children[0] === undefined){
                li[q] = undefined;
              }
          }
        } else if( event.target.value !== splitKeywords[j]){  
          for(let g = 0; g < arrResult.length; g++){
            if(event.target.value !== arrResult[g] ){
              arrResult =[];
              pushSymbols =[];
              pushTitle =[];
              li = [];
            }
          }
        }
      }
    }
  }
Em();
};
handleSubmit = (event) => {
  event.preventDefault();
}
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        <h2>Search: </h2>
        <div className='wrap'>
        <input className='input' type="text" value={this.state.value} onChange={this.handleChange} />
        {li[0]}{li[1]}{li[2]}{li[3]}{li[4]}{li[5]}{li[6]}{li[7]}{li[8]}{li[9]} 
        </div>
        
      </label>
      <input type="submit" value="Search" className='button'/>
    </form>
  );
}
}
 