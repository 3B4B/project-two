import { html } from 'lit-html';
import '../src/app.js';

export default {
  title: 'Learning Card',
  component: 'learning-card',
  argTypes: {
    slot: { control: 'text' },
    heading: { control: 'text' },
    type: {
      control: 'select',
      options: {
        chem: 'chem',
        objectives: 'objectives',
        know: 'know',
      },
    },
  },
};

//
//    Define Templates
//

// Learning Card
function LearningCardTemplate({ type, slot, heading }) {
  return html`
    <learning-card type="${type}" header="${heading}">
      <div slot="content">${slot}</div>
    </learning-card>
  `;
}

//
// Defining Elements
//

export const LearningCard = LearningCardTemplate.bind({});
export const ChemCard = LearningCardTemplate.bind({});
export const KnowCard = LearningCardTemplate.bind({});
export const ObjectiveCard = LearningCardTemplate.bind({});
ChemCard.args = {
  type: 'chem',
  heading: 'Unit 1',
  slot: html`<p>I am chem connection card</p>`,
};
KnowCard.args = {
  type: 'know',
  heading: 'Unit 2',
  slot: html`<p>I am knowledge card</p>`,
};
ObjectiveCard.args = {
  type: 'objective',
  heading: 'Unit 3',
  slot: html`<p>I am objective card</p>`,
};
