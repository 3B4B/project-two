/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class LearningBanner extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'blue';
    this.dark = false;
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
          background-color: var(--learning-card-banner-color);
        }
        #banner {
          background-color: var(--learning-card-banner-color);
          display: flex;
          flex-direction: row;
          color: white;
          font-family: 'Open Sans', sans-serif;
          margin: 0px;
          vertical-align: middle;
        }

        #grid {
          display: grid;
          grid-template-columns: 1fr 4fr;
          grid-gap: 10px;
        }
        .gridItem {
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
        #main-header {
          font-weight: 400;
          font-size: 50px;
          border: 2px solid red;
          margin: 0;
          padding: 0;
          border: 1px solid yellow;
        }
        #sub-header {
          font-weight: 500;
          font-size: 60px;
          border: 1px solid yellow;
          margin: 0;
          padding: 0;
        }
      `,
    ];
  }

  render() {
    // Banner
    return html`
      <div id="banner">
        <div id="grid">
          <div id="iconContainer">
            <slot name="icon"></slot>
          </div>
          <div class="gridItem">
            <slot id="main-header" name="heading"></slot>
            <slot id="sub-header" name="subHeading"></slot>
          </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define(LearningBanner.tag, LearningBanner);