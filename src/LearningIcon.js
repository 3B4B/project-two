/* eslint-disable no-unused-vars */
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class LearningIcon extends SimpleColors {
  constructor() {
    super();
    this.image = question;
    this.alt = 'question icon';
    this.dark = false;
  }

  static get tag() {
    return 'learning-icon';
  }

  static get properties() {
    return {
      ...super.properties,
      image: { type: String },
      type: { type: String, reflect: true },
      alt: { type: String },
    };
  }

  updated(changedProperties) {
    console.log('I ran');
    changedProperties.forEach((oldValue, propName) => {
      console.log(`Prop name:${propName}Value: ${this[propName]}`);
      if (propName === 'type' && this[propName] === 'CHEM CONNECTION') {
        this.image = new URL('../assets/beaker.svg', import.meta.url).href;
        this.alt = this[propName];
      } else if (propName === 'type' && this[propName] === 'DID YOU KNOW?') {
        this.image = new URL('../assets/question.svg', import.meta.url).href;
        this.alt = this[propName];
      } else if (
        propName === 'type' &&
        this[propName] === 'LEARNING OBJECTIVES'
      ) {
        this.image = new URL('../assets/lightbulb.svg', import.meta.url).href;
        this.alt = this[propName];
      }

      console.log(`Image Location: ${this.image}`);
    });
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: inline-flex;
          flex-direction: row;
          height: var(--learning-card-height, 150px);
          width: var(--learning-card-width, 150px);
          background-color: var(--learning-card-banner-color);
        }
        /* :host([type='CHEM CONNECTION']) {
          background-color: green;
        }
        :host([type='CHEM CONNECTION']) img {
          fill: green;
        }
        :host([type='LEARNING OBJECTIVES']) {
          background-color: orange;
        }
        :host([type='LEARNING OBJECTIVES']) img {
          fill: orange;
        }

        :host([type='DID YOU KNOW?']) {
          background-color: blue;
        }
        :host([type='DID YOU KNOW?']) img {
          fill: blue;
        } */
        span {
          display: inline-flex;
          height: var(--learning-card-height, 150px);
          width: var(--learning-card-width, 150px);
          justify-content: center;
          align-items: center;
        }
        img {
          display: inline-flex;
          height: var(--learning-card-height, 150px);
          width: var(--learning-card-width, 150px);
          background-color: var(--learning-banner-color);
        }
      `,
    ];
  }

  render() {
    console.log(this.image);
    return html`
      <div>
        <span><img src="${this.image}" alt="${this.alt}" /></span>
      </div>
    `;
  }
}
customElements.define(LearningIcon.tag, LearningIcon);
