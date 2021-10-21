/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

import './LearningHeader.js';
import './LearningIcon.js';

export class LearningBanner extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'blue';
    this.dark = false;
    // import './LearningIcon.js';
  }

  static get tag() {
    return 'learning-banner';
  }

  static get properties() {
    return {
      ...super.properties,
      image: { type: String, attribute: 'image' },
      type: { type: String, reflect: true },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        #banner {
          background-color: var(--learning-card-banner-color);
          display: flex;
          flex-direction: row;
          border: 1px solid var(--learning-card-banner-color);
          color: white;
          font-family: 'Open Sans', sans-serif;
        }

        #grid {
          display: grid;
          border: 1px solid red;
          grid-template-columns: 1fr 4fr;
          grid-gap: 20px;
        }

        .gridItem {
          border: 4px solid pink;
        }
        :host([type='CHEM CONNECTION']) #banner {
          background-color: green;
        }
        :host([type='LEARNING OBJECTIVES']) #banner {
          background-color: orange;
        }
        :host([type='DID YOU KNOW?']) #banner {
          background-color: blue;
        }
        #banner {
          background-color: var(--learning-card-banner-color);
          display: flex;
          flex-direction: row;
          color: white;
          font-family: 'Open Sans', sans-serif;
        }
        #headers {
          padding: 0px;
          margin: 0px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `,
    ];
  }

  render() {
    return html`
      <div id="grid">
        <div class="gridItem">
          <learning-icon type=${this.type}></learning-icon>
        </div>
        <div class="gridItem">
          <learning-header></learning-header>
        </div>
      </div>
    `;
  }
}
customElements.define(LearningBanner.tag, LearningBanner);
