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

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          background-color: black;
        }
      `,
    ];
  }

  render() {
    return html` <div><p>Hello</p></div> `;
  }
}
