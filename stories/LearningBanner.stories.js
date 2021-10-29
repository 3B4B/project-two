import { html } from 'lit-html';

import '../src/LearningBanner.js';
import '../src/LearningIcon.js';

export default {
  title: 'Learning Banner',
  component: 'learning-banner',
  argTypes: {
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

function LearningBannerTemplate({ type, heading }) {
  return html`
    <learning-banner type=${type} slot="banner">
      <learning-icon type=${type} slot="icon"></learning-icon>
      <h2 slot="heading">${heading}</h2>
      <h3 slot="subHeading">${type}</h3>
    </learning-banner>
  `;
}

export const KnowledgeBanner = LearningBannerTemplate.bind({});
KnowledgeBanner.args = {
  type: 'know',
  heading: 'Unit 1',
};

export const ChemBanner = LearningBannerTemplate.bind({});
ChemBanner.args = {
  type: 'chem',
  heading: 'Unit 2',
};

export const ObjectiveBanner = LearningBannerTemplate.bind({});
ObjectiveBanner.args = {
  type: 'objectives',
  heading: 'Unit 3',
};
