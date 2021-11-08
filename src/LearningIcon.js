/* eslint-disable no-console */
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
    this.alt = '';
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
    changedProperties.forEach((oldValue, propName) => {
      console.log(`Prop name:${propName}Value: ${this[propName]}`);
      if (propName === 'type' && this[propName] === 'chem') {
        this.image = beaker;
        this.accentColor = 'green';
      } else if (propName === 'type' && this[propName] === 'know') {
        this.image = question;
        this.accentColor = 'blue';
      } else if (propName === 'type' && this[propName] === 'objectives') {
        this.image = lightbulb;
        this.accentColor = 'orange';
      }
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
        }
        span {
          display: inline-flex;
          height: var(--learning-card-height, 150px);
          width: var(--learning-card-width, 150px);
          justify-content: center;
          align-items: center;
          padding: 0px 10px;
        }
        img {
          display: inline-flex;
          height: var(--learning-card-height, 150px);
          width: var(--learning-card-width, 150px);
        }

        @media screen and (min-width: 300px) and (max-width: 650px){
          :host {
            display: inline-flex;
            flex-direction: row;
            height: 90px;
            width: 90px;
          }
          span {
            height: 90px;
            width: 90px;
          }
        }

        @media screen and (min-width: 650px) and (max-width: 1000px){
          :host {
            display: inline-flex;
            flex-direction: row;
            height: 120px;
            width: 120px;
          }
          span {
            height: 120px;
            width: 120px;
            justify-content: center;
            align-items: center;
            padding: 0px 10px;
          }
          img {
            height: 120px;
            width: 120px;
          }
        }

      `,
    ];
  }

  render() {
    return html`
      <div>
        <span><img src="${this.image}" alt="${this.alt}" /></span>
      </div>
    `;
  }
}
customElements.define(LearningIcon.tag, LearningIcon);
