import { html } from 'lit-html';
import '../src/app.js';

export default {
  title: 'Learning Scaffold',
  component: 'learning-scaffold',
  argTypes: {
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

// This is going to display nothing???? So why have it?
function LearningScaffoldTemplate({ type = 'LEARNING OBJECTIVES' }) {
  return html` <learning-scaffold type=${type}> </learning-scaffold> `;
}

export const LearningScaffold = LearningScaffoldTemplate.bind({});
LearningScaffold.args = {
  type: 'chem',
};
