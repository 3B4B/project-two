/* eslint-disable no-unused-vars */
// dependencies / things imported
import { LitElement, html, css } from 'lit';
import './LearningScaffold.js';

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class LearningCard extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'learning-card';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.myIcon = null;
    this.type = 'LEARNING OBJECTIVES';

    // setTimeout(() => {
    //   import('./LearningBanner.js');
    //   import('./LearningIcon.js');
    // }, 0);
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      type: { type: String, reflect: true },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {}

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
      :host {
        display: block;
        font-family: 'Open Sans', sans-serif;
        margin: 50px;
      }

      .entire-card {
        width: 700px;
        font-family: 'Open Sans', sans-serif;
      }

      .main-header {
        font-weight: 300;
        font-size: 50px;
        /* border: 1px solid yellow; */
        margin: 0;
      }

      .sub-header {
        font-weight: 500;
        font-size: 50px;
        /* border: 1px solid yellow; */
        margin: 0;
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div class="entire-card">
        <learning-scaffold type=${this.type}>
          <learning-banner type=${this.type} slot="banner">
            <learning-icon type=${this.type} slot="icon"></learning-icon>
            <h2 class="main-header" slot="heading">UNIT 1</h2>
            <h3 class="sub-header" slot="subHeading">${this.type}</h3>
          </learning-banner>

          <div slot="content">
            <ul>
              <li>Describe the subatomic particles that make up an atom</li>
              <li>
                Use the periodic table to determine the numbers of protons and
                electrons in a neutral (uncharged) atom.
              </li>
              <li>Describe the subatomic particles that make up an atom.</li>
              <li>
                Use the periodic table to determine the numbers of protons and
                electrons in a neutral (uncharged) atom.
              </li>
            </ul>
          </div>
        </learning-scaffold>
      </div>
    `;
  }

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
          tag: LearningCard.tag,
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
