/* eslint-disable no-unused-vars */
import { LitElement, html, css } from 'lit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { IntersectionObserverMixin } from '@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

export class LearningCard extends IntersectionObserverMixin(SimpleColors) {
  static get tag() {
    return 'learning-card';
  }

  constructor() {
    super();
    this.type = 'know';
    this.header = 'Unit #';
    this.subheader = 'DID YOU KNOW?';

    setTimeout(() => {
      import('./LearningBanner.js');
      import('./LearningIcon.js');
    }, 0);
  }

  static get properties() {
    let props = {};
    if (super.properties) {
      props = super.properties;
    }
    return {
      type: { type: String, reflect: true },
      link: { type: String, reflect: true },
      header: { type: String, reflect: true },
      subheader: { type: String, reflect: true },
    };
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'chem') {
        this.subheader = 'CHEM CONNECTION';
      } else if (propName === 'type' && this[propName] === 'know') {
        this.subheader = 'DID YOU KNOW?';
      } else if (propName === 'type' && this[propName] === 'objectives') {
        this.subheader = 'LEARNING OBJECTIVES';
      }
    });
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  static get styles() {
    return css`
      :host {
        font-family: 'Open Sans', sans-serif;
        margin: 50px;
      }
      .entire-card {
        font-family: 'Open Sans', sans-serif;
        width: 900px;
        transition: all 0.35s ease-in-out;
      }

      .main-header {
        font-weight: 300;
        font-size: 50px;
        margin: 0;
      }

      .sub-header {
        font-weight: 500;
        font-size: 50px;
        margin: 0;
      }

      .content {
        background-color: white;
        border: 1px solid black;
        border-top: transparent;
        padding-top: 5px;
        padding-bottom: 10px;
        padding-left: 150px;
        margin: 0px;
      }

      .content ::slotted(circle-button-fj) {
        margin-left: 260px;
      }

      @media screen and (min-width: 300px) and (max-width: 650px) {
        .entire-card {
          transition: all 0.35s ease-in-out;
          width: 400px;
        }

        .main-header {
          font-weight: 300;
          font-size: 40px;
          margin: 0;
        }

        .sub-header {
          font-weight: 500;
          font-size: 40px;
          margin: 0;
        }

        .content {
          padding-top: 5px;
          padding-left: 10px;
          padding-bottom: 20px;
          padding-right: 30px;
          margin: 0px;
        }

        .content ::slotted(circle-button-fj) {
          margin-left: 148px;
        }
      }

      @media screen and (min-width: 650px) and (max-width: 1000px) {
        .entire-card {
          transition: all 0.35s ease-in-out;
          width: 600px;
        }

        .main-header {
          font-weight: 300;
          font-size: 45px;
          margin: 0;
        }

        .sub-header {
          font-weight: 500;
          font-size: 45px;
          margin: 0;
        }

        .content {
          padding-top: 5px;
          padding-bottom: 10px;
          padding-left: 50px;
          margin: 0px;
        }

        .content ::slotted(circle-button-fj) {
          margin-left: 196px;
        }
      }
    `;
  }

  render() {
    // Entire Card
    return html`
      ${this.elementVisible
        ? html` <div class="entire-card">
            <learning-scaffold type=${this.type}>
              <div slot="banner">
                <learning-banner type=${this.type} slot="banner">
                  <learning-icon type=${this.type} slot="icon"></learning-icon>
                  <h2 class="main-header" slot="heading">${this.header}</h2>
                  <h3 class="sub-header" slot="subHeading">
                    ${this.subheader}
                  </h3>
                </learning-banner>
              </div>
              <div slot="content" class="content">
                <slot name="content"></slot>
              </div>
            </learning-scaffold>
          </div>`
        : ``}
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
