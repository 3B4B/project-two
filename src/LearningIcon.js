/* eslint-disable no-unused-vars */
import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-colors/simple-colors.js';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class LearningIcon extends LitElement {
  static get tag() {
    return 'learning-icon';
  }

  constructor() {
    super();
    this.image = 'https://www.w3schools.com/images/lamp.jpg';
    this.dark = false;
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
          height: var(--learning-card-height, 150px);
          width: var(--learning-card-width, 150px);
          background-color: orange;
          border: 1px solid black;
        }
        /*
        img {
            display: inline-flex;
            height: var(--learning-card-height, 150px);
            width: var(--learning-card-width, 150px);
        } */
      `,
    ];
  }

  render() {
    // return html` <div><img src="https://www.w3schools.com/images/lamp.jpg" alt="lamp" height="150px" width="150px"/></div> `;
    // return html`
    //   <div>
    //     <p>cheese</p>
    //   </div>

    //   `
    // ;
    return html` <div><p>words</p></div> `;
  }
}
