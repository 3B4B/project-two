/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

import './LearningBanner.js';
import './LearningIcon.js';

export class LearningScaffold extends SimpleColors {
  constructor() {
    super();
    this.dark = false;
  }

  static get tag() {
    return 'learning-scaffold';
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String, reflect: true },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');
        :host {
          display: block;
          font-family: 'Open Sans', sans-serif;
        }
        /* this is how you match something on the tag itself like <learning-card type="math"> and then style the img inside */
        /* :host([type='math']) img {
        background-color: transparent;
      } */

        #content {
          background-color: white;
          border: 1px solid black;
          border-top: transparent;
          padding-top: 5px;
          padding-bottom: 5px;
          padding-left: 150px;
          margin: 0px;
        }

        ul {
          margin: 0px;
          padding: 0px;
        }
      `,
    ];
  }

  render() {
    // Scaffold card
    return html`
      <div id="banner">
        <slot name="banner"></slot>
      </div>
      <div id="content">
        <slot name="content"></slot>
      </div>
    `;
  }
}
customElements.define(LearningScaffold.tag, LearningScaffold);
