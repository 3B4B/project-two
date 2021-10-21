import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class LearningHeader extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'pink';
    this.dark = false;
  }

  static get tag() {
    return 'learning-header';
  }

  static get properties() {
    return {
      ...super.properties,
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        #headers {
          padding: 0px;
          margin: 0px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: left;
        }

        #main-header {
          font-weight: 300;
          font-size: 50px;
          /* border: 1px solid blue; */
          margin: 0;
        }
        #sub-header {
          font-weight: 500;
          font-size: 50px;
          /* border: 1px solid yellow; */
          margin: 0;
        }
      `,
    ];
  }

  render() {
    return html`
      <div id="headers">
        <h2 id="main-header">Unit 1</h2>
        <h3 id="sub-header">Learning Objectives</h3>
      </div>
    `;
  }
}
customElements.define(LearningHeader.tag, LearningHeader);
