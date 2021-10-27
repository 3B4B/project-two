import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';

describe('LearningCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html` <learning-card type="DID YOU KNOW?"
        ><p slot="content">I am content</p></learning-card
      >`
    );
  });

  it('renders an learning-banner', () => {
    const banner = element.shadowRoot.querySelector('learning-banner');
    expect(banner).to.exist;
    // expect(parag.textContent).to.equal('I am content');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});

describe('Learning-Scaffold', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html`<learning-scaffold type="CHEM CONNECTION"
        ><learning-banner
          type="CHEM CONNECTION"
          slot="banner"
        ></learning-banner>
        <p slot="content">What am I thinking</p></learning-scaffold
      >`
    );
  });

  it('renders a paragraph', () => {
    const parag = element.shadowRoot.querySelector('div');
    expect(parag).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});

describe('Learning-Banner', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html`<learning-banner type="LEARNING OBJECTIVES" slot="banner">
        <learning-icon type="LEARNING OBJECTIVES" slot="icon"></learning-icon>
        <h2 id="main-header" slot="heading">Unit 1</h2>
        <h3 id="sub-header" slot="subHeading">"LEARNING OBJECTIVES"</h3>
      </learning-banner>`
    );
  });

  // Fails, how come this does not find the icon, it's passed in as a slot?
  it('renders a learning-icon', () => {
    const icon = element.shadowRoot.querySelector('learning-icon');
    expect(icon).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});

describe('Learning-Icon', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html`<learning-icon type="DID YOU KNOW?"></learning-icon>`
    );
  });

  it('renders a paragraph', () => {
    const parag = element.shadowRoot.querySelector('img');
    expect(parag).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
