import { css } from "@emotion/react";

export default css`
  *:where(:not(html, iframe, canvas, img, svg, video):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  input[type="checkbox"],
  input[type="radio"] {
    all: revert;
  }

  input,
  textarea,
  select {
    all: revert;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a,
  button {
    cursor: revert;
  }

  ol,
  ul,
  menu {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  table {
    border-collapse: collapse;
  }

  input,
  textarea {
    -webkit-user-select: auto;
  }

  textarea {
    white-space: revert;
  }

  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  ::placeholder {
    color: unset;
  }

  :where([hidden]) {
    display: none;
  }

  :where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
  }

  :where([draggable="true"]) {
    -webkit-user-drag: element;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
    border: 0;
  }
`;
