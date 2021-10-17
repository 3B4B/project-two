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
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          background-color: green;
        }
      `,
    ];
  }

  render() {
    return html`
      <div>
        <p>Hello<span></span></p>
      </div>
    `;
  }
}
customElements.define(LearningBanner.tag, LearningBanner);
