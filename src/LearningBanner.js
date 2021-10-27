/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

import './LearningIcon.js';

export class LearningBanner extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'blue';
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

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'CHEM CONNECTION') {
        this.accentColor = 'green';
      } else if (propName === 'type' && this[propName] === 'DID YOU KNOW?') {
        this.accentColor = 'blue';
      } else if (
        propName === 'type' &&
        this[propName] === 'LEARNING OBJECTIVES'
      ) {
        this.accentColor = 'orange';
      }
    });
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          background-color: var(--simple-colors-default-theme-accent-7);
        }
        :host([dark]) #banner {
          background-color: var(--simple-colors-default-theme-accent-3);
        }
        .banner {
          background-color: var(--simple-colors-default-theme-accent-7);
          display: flex;
          flex-direction: row;
          color: white;
          font-family: 'Open Sans', sans-serif;
          margin: 0px;
          border: 1px, solid, var(--simple-colors-default-theme-accent-7);
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 4fr;
          align-items: center;
          grid-gap: 10px;
        }

        /* .gridItem {
          border: 1px solid yellow;
        } */
      `,
    ];
  }

  render() {
    // Banner
    return html`
      <div class="banner">
        <div class="grid">
          <div class="gridItem">
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
