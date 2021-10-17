import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-colors/simple-colors.js';

export class LearningBanner extends LitElement {
  static get tag() {
    return 'learning-banner';
  }

  constructor() {
    super();
    this.accentColor = 'blue';
    this.dark = false;
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
        :host {
          display: block;
          background-color: var(--simple-colors-default-theme-accent-8);
          color: var(--simple-colors-default-theme-grey-1);
        }
      `,
    ];
  }

  render() {
    return html` <div><p>HELLO</p></div> `;
  }
}
