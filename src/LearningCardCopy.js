/* eslint-disable no-unused-vars */
// dependencies / things imported
import { LitElement, html, css } from 'lit';
import './LearningBanner.js';
import './LearningIcon.js';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class LearningCardCopy extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'learning-card-copy';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.type = 'question';
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      // reflect allows state changes to the element's property to be leveraged in CSS selectors
      type: { type: String, reflect: true },
      // attribute helps us bind the JS spec for variables names to the HTML spec
      // <learning-card my-icon="whatever" will set this.myIcon to "whatever"
      userIcon: { type: String, attribute: 'user-icon' },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'science') {
        this.myIcon = 'beaker';
      }
    });
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  connectedCallback() {
    super.connectedCallback();
  }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
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

      img {
        display: inline-flex;
        height: var(--learning-card-height, 150px);
        width: var(--learning-card-width, 150px);
        background-color: blue;
      }
      #iconDiv {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: 1px solid orange;
      }
      #entire-card {
        border-width: 1px;
        background-color: red;
        font-family: 'Open Sans', sans-serif;
      }

      #content {
        background-color: white;
        border: 1px solid black;
        border-top: transparent;
        padding-left: 190px;
      }
      #scaffold-card {
        display: flex;
        flex-direction: column;
        border-color: black;
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
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div id="entire-card">
        <div id="scaffold-card">
          <learning-banner type=${this.type}>
            <p id="main-header" slot="mainHeader">I AM MAIN HEADER</p>
            <p id="sub-header" slot="subHeader">I AM SUB HEADER</p>
          </learning-banner>
          <div id="content">
            <p>Paragraph starts</p>
            <ul>
              <li>List Starts</li>
              <li>Physics</li>
              <li>Stat</li>
            </ul>
            <ol>
              <li>Numbered List starts</li>
            </ol>
          </div>
        </div>
      </div>
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return {
      canScale: false,
      canPosition: false,
      canEditSource: true,
      contentEditable: true,
      gizmo: {
        title: 'Learning Card',
        description: 'An element that you have to replace / fix / improve',
        icon: 'credit-card',
        color: 'blue',
        groups: ['Content', 'Presentation', 'Education'],
      },
      settings: {
        configure: [
          {
            property: 'type',
            title: 'Type',
            description: 'Identifies the card',
            inputMethod: 'select',
            options: {
              science: 'Science',
              math: 'Math',
            },
          },
        ],
        advanced: [],
      },
      demoSchema: [
        {
          tag: LearningCardCopy.tag,
          properties: {
            type: 'science',
          },
          content:
            "<p slot='header'>This tag renders in the header</p><ul><li>This renders</li><li>Below the tag</li></ul>",
        },
      ],
    };
  }
}
