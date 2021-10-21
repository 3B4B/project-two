/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

import './LearningHeader.js';
import './LearningIcon.js';

// this is the base path to the assets calculated at run time
// this ensures that assets are shipped correctly when building the demo
// on github pages, or when people reuse assets outside your elements in production
// because this won't change we can leverage as an internal variable without being
// declared in properties. This let's us ship the icons while referencing them correctly

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

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
        #banner {
          background-color: var(--learning-card-banner-color);
          display: flex;
          flex-direction: row;
          border: 1px solid var(--learning-card-banner-color);
          color: white;
          font-family: 'Open Sans', sans-serif;
        }
        #headers {
          padding: 0px;
          margin: 0px;
          display: flex;
          border: 2px solid red;
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
          <learning-icon image=${this.type}></learning-icon>
        </div>
        <div class="gridItem">
          <learning-header></learning-header>
        </div>
      </div>
    `;
  }
}
customElements.define(LearningBanner.tag, LearningBanner);
