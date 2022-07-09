import { createGlobalStyle } from 'styled-components';

export const ResetCSS = createGlobalStyle`
  /*! destyle.css v3.0.2 | MIT License | https://github.com/nicolas-cusan/destyle.css */

  /* Reset box-model and set borders */
  /* ============================================ */

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
  }

  /* Document */
  /* ============================================ */

  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   * 3. Remove gray overlay on links for iOS.
   */

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    -webkit-tap-highlight-color: transparent; /* 3*/
  }

  /* Sections */
  /* ============================================ */

  /**
   * Remove the margin in all browsers.
   */

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  /**
   * Render the "main" element consistently in IE. */

  main {
    display: block;
  }

  /* Vertical rhythm */
  /* ============================================ */

  p,
  table,
  blockquote,
  address,
  pre,
  iframe,
  form,
  figure,
  dl {
    margin: 0;
  }

  /* Headings */
  /* ============================================ */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
  }

  /* Lists (enumeration) */
  /* ============================================ */

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /* Lists (definition) */
  /* ============================================ */

  dt {
    font-weight: bold;
  }

  dd {
    margin-left: 0;
  }

  /* Grouping content */
  /* ============================================ */

  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
    border-top-width: 1px;
    margin: 0;
    clear: both;
    color: inherit;
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd "em" font sizing in all browsers.
   */

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: inherit; /* 2 */
  }

  address {
    font-style: inherit;
  }

  /* Text-level semantics */
  /* ============================================ */

  /**
   * Remove the gray background on active links in IE 10.
   */

  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
  }

  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

  abbr[title] {
    text-decoration: underline dotted; /* 2 */
  }

  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

  b,
  strong {
    font-weight: bolder;
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd "em" font sizing in all browsers.
   */

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: inherit; /* 2 */
  }

  /**
   * Add the correct font size in all browsers.
   */
`;