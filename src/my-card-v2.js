import { LitElement, html, css } from 'lit';

class MyCardV2 extends LitElement {
  static properties = {
    header: { type: String },
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
  consturctor()
  {
    super();
  }

  render() {
    return html`
      <div class="wrap">
  <div class="container">
    <div class="header">
      <h3> THE MCU</h3>
    </div>
    <img class="image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4884720.png&f=1&nofb=1&ipt=b86f47823ab6a8f5936b05270477294e1a27ee2b3b934a7789d434a72869fb8a&ipo=images">
    <div class="descrip">
      <p>Growing up, I was a huge MCU fan. I watched all of the movies, some more than others, and I think that the picture that sums up how I feel about it is this one, which is the final battle in Endgame. I just felt pure joy seeing all these characters together. </p>
    </div>
    </div>
  </div>
</div>
    
    `;
  }
  
}

customElements.define('my-card-v2', MyCardV2);