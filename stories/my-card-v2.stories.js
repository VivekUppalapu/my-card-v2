import { html } from 'lit';
import '../src/my-card-v2.js';

export default {
  title: 'MyCardV2',
  component: 'my-card-v2',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <my-card-v2
      style="--my-card-v2-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </my-card-v2>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
