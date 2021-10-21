import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

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
        :host {
          display: block;
          background-color: var(--simple-colors-default-theme-accent-8);
          color: var(--simple-colors-default-theme-grey-1);
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
      <div id="banner">
        <learning-icon type=${this.type}></learning-icon>
        <div id="headers">
          <slot name="mainHeader">idk what happened</slot>
          <slot name="subHeader">yeah same</slot>
        </div>
      </div>
    `;
  }
}
customElements.define(LearningBanner.tag, LearningBanner);
