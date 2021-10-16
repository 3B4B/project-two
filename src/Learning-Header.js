import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

export class LearningHeader extends SimpleColors {
  constructor() {
    super();
    this.accentColor = 'pink';
    this.dark = false;
  }

  static get tag() {
    return 'learning-header';
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
    return html`<div>This is my header}<slot></slot></div>`;
  }
}
customElements.define(LearningHeader.tag, LearningHeader);
