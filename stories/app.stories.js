import { html } from 'lit-html';
import '../src/app.js';

export default {
  title: 'Project two',
  component: 'learning-card',
  argTypes: {
    type: { control: 'text' },
    slot: { control: 'text' },
  },
};

function LearningCardTemplate({ type = 'CHEM CONNECTION', slot }) {
  return html`
    <learning-card type="${type}">
      <div slot="content">${slot}</div>
    </learning-card>
  `;
}

export const LearningCard = LearningCardTemplate.bind({});
LearningCard.args = {
  type: 'CHEM CONNECTION',
  slot: html`<p>slotted content that should render</p>`,
};
