/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';
import './LearningHeader.js';
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
          --learning-card-banner-color: green;
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
          padding-left: 190px;
        }
      `,
    ];
  }

  render() {
    return html`
      <div>
        <span>
          <div id="banner">
            <learning-banner type=${this.type}></learning-banner>
          </div>
          <div id="content">
            <ul>
              <li>Describe the subatomic particles that make up an atom</li>
              <li>
                Use the periodic table to determine the numbers of protons and
                electrons in a neutral (uncharged) atom.
              </li>
              <li>Describe the subatomic particles that make up an atom.</li>
              <li>
                Use the periodic table to determine the numbers of protons and
                electrons in a neutral (uncharged) atom.
              </li>
            </ul>
          </div></span
        >
      </div>
    `;
  }
}
customElements.define(LearningScaffold.tag, LearningScaffold);
