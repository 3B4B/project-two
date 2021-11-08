import { LitElement, html } from 'lit';

export class LearningScaffold extends LitElement {
  constructor() {
    super();
  }

  static get tag() {
    return 'learning-scaffold';
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
