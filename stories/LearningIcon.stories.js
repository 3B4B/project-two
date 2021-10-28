import { html } from 'lit-html';
import '../src/app.js';

export default {
  title: 'Learning Card',
  component: 'learning-card',
  argTypes: {
    slot: { control: 'text' },
    type2: {
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
function LearningCardTemplate({ type, slot }) {
  return html`
    <learning-card type="${type}">
      <div slot="content">${slot}</div>
    </learning-card>
  `;
}

// Learning Icon
function LearningIconTemplate({ type = 'CHEM CONNECTION' }) {
  return html` <learning-icon type="${type}"></learning-icon> `;
}

function LearningBannerTemplate({
  type = 'LEARNING OBJECTIVES',
  heading = 'Unit 1',
}) {
  return html`
    <learning-banner type=${type} slot="banner">
      <learning-icon type=${type} slot="icon"></learning-icon>
      <h2 slot="heading">${heading}</h2>
      <h3 slot="subHeading">${type}</h3>
    </learning-banner>
  `;
}

// This is going to display nothing???? So why have it?
function LearningScaffoldTemplate({ type = 'LEARNING OBJECTIVES' }) {
  return html` <learning-scaffold type=${type}></learning-scaffold> `;
}

//
// Defining Elements
//

export const LearningCard = LearningCardTemplate.bind({});
LearningCard.args = {
  type: 'CHEM CONNECTION',
  slot: html`<p>slotted content that should render</p>`,
};

export const LearningIcon = LearningIconTemplate.bind({});
LearningIcon.args = {
  type: 'DID YOU KNOW',
};

export const LearningBanner = LearningBannerTemplate.bind({});
LearningBanner.args = {
  // Default
  type: 'LEARNING OBJECTIVES',
  heading: 'Unit 233',
};

export const LearningScaffold = LearningScaffoldTemplate.bind({});
LearningScaffold.args = {
  type: 'CHEM CONNECTION',
};
