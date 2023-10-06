import { LitElement, html, css } from 'lit';
const MCU = new URL('../assets/MCU.jpeg', import.meta.url).href;
import "@webdev0916/my-card-v2/my-card-v2.js";
class MyCardV2 extends LitElement {
  static properties = {
    title:{type: String},
    descrip: {type: String}
  }

  static styles = css`
  .wrap{
  width: 400px;
  border: 2.5px solid black;
  background-color: red;
}
.image{
  width: 400px;
  
}
.header{
   text-align: center;
}
.header h3{
  font-size: 40px;
  color: blue;
}
.descrip
{
  font-size: 16px;
  font-weight: bold;
  color: white;
}

  `;




  constructor()
  {
    super();
    this.title = "THE MCU";
    this.descrip = "Growing up, I was a huge MCU fan. I watched all of the movies, some more than others, and I think that the picture that sums up how I feel about it is this one, which is the final battle in Endgame. I just felt pure joy seeing all these characters together.";
    
  
  }

  render() {
    return html`
      <div class="wrap">
  <div class="container">
    <div class="header">
      <h3> ${this.title}</h3>
    </div>
    <img class="image" src="${MCU}">
    <div class="descrip"><slot></slot>
      <p>${this.descrip}</p>
      
    </div>
    </div>
  </div>
</div>
    
    `;
  }
  
}

customElements.define('my-card-v2', MyCardV2);