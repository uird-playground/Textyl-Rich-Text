# Textyle

Textyle is a versatile text editor package for React that provides a rich set of components for creating and editing text content.

## Installation

To install Textyle, use npm:

```bash
npm install textyle
```

## Usage

Import the necessary components from the "textyle" package and incorporate them into your React application.

```jsx
import { TextylEditor, TextylToolbar } from "textyle/components";

const onChange = (value) => {
  // will run after a debounce of 2 seconds
  console.log(value);
};

// You can use the Toolbar and Editor separately
const MyTextEditor = () => (
  <div>
    <TextylToolbar />
    <TextylEditor
      onChange={onChange}
      initialValue="YOUR_HTML_INITIAL_VALUE"
      placeholder="YOUR_PLACEHOLDER"
    />
  </div>
);
```

More details will be added on how to customize the components and their functionalities according to your application's needs.

## ISC License

Copyright 2023 Omar Mokhfi

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.