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
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #main-header {
          font-weight: 300;
          font-size: 50px;
          border: 1px solid red;
          margin: 0;
          padding-left: 30px;
        }
        #sub-header {
          font-weight: 500;
          font-size: 50px;
          border: 1px solid yellow;
          margin: 0;
          padding-left: 10px;
        }
      `,
    ];
  }

  render() {
    return html`
      <div id="banner">
        <learning-icon image=${this.image}></learning-icon>
        <div id="headers">
          <h2 id="main-header">I AM MAIN HEADER</h2>
          <h3 id="sub-header">I AM SUB HEADER</h3>
        </div>
      </div>
    `;
  }
}
customElements.define(LearningBanner.tag, LearningBanner);
