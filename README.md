
# code-copy-cat

`code-copy-cat` is a versatile React component library designed for displaying code snippets with syntax highlighting and copy-to-clipboard functionality. It supports various themes for syntax highlighting and provides an intuitive interface for copying code snippets effortlessly.

![code-copy-cat](https://github.com/user-attachments/assets/b9011cd7-aad7-48eb-aa0b-28e59f74d960)

## Installation

Install the package via npm:

```bash
npm install code-copy-cat
```

## Usage

To use the `CodeCopyCat` component in your React project, follow the example below:

```jsx
import React from "react";
import { CodeCopyCat } from "code-copy-cat";

const App = () => {
  return (
    <div>
      <h1>Code Copy Cat Example</h1>
      <div style={{ width: '80%', height: '300px' }}>
        <CodeCopyCat
          language="javascript"
          code={`// Example code\nconst greet = () => console.log('Hello, World!');`}
          theme="dracula"
          isCopy={true}
          isHead={true}
          wrapLines={true}
        />
      </div>
    </div>
  );
};

export default App;
```

## Props

The `CodeCopyCat` component accepts the following props:

| Prop Name  | Type      | Default      | Description                                                  |
|------------|-----------|--------------|--------------------------------------------------------------|
| `language` | `string`  | `"HTML"`     | The programming language of the code snippet.                |
| `code`     | ``string``| `""`         | The code snippet to be displayed.                            |
| `theme`    | `string`  | `"nightOwl"` | The theme for syntax highlighting. Supports multiple themes. |
| `isCopy`   | `boolean` | `true`       | Enable or disable the copy button.                           |
| `isHead`   | `boolean` | `true`       | Show or hide the header containing the language and copy button. |
| `wrapLines`| `boolean` | `true`       | Enable or disable wrapping of long lines.                    |

## Themes

The following themes are supported for syntax highlighting:

- `atomOneDark`
- `dracula`
- `nightOwl`
- `github`
- `a11yLight`
- `atomOneLight`

## Example

Another usage example with a predefined code snippet:

```jsx
import React from "react";
import { CodeCopyCat } from "code-copy-cat";

const codeSnippet = `
// Example code
const greet = () => console.log('Hello, World!');
`;

const App = () => {
  return (
    <div>
      <h1>Code Copy Cat Example</h1>
      <div style={{ width: '80%', height: '300px' }}>
        <CodeCopyCat
          language="javascript"
          code={codeSnippet}
          theme="dracula"
          isCopy={true}
          isHead={true}
          wrapLines={true}
        />
      </div>
    </div>
  );
};

export default App;
```

## Development

To build the project, run:

```bash
npm run build
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue on GitHub.

## License

This project is licensed under the MIT License.

## Author

Kamlesh Sahani

## Email

kamleshbca2005@gmail.com

## Repository

[GitHub Repository](https://github.com/kamlesh-Sahani/code-copy-cat)

## Bugs

If you find any bugs, please report them at the [Issues Page](https://github.com/kamlesh-Sahani/code-copy-cat/issues).

## Homepage

For more information, visit the [Homepage](https://github.com/kamlesh-Sahani/code-copy-cat#readme).

In this example, the `CodeCopyCat` component is wrapped in a `div` with specified `width` and `height` to adjust its size. You can modify the `width` and `height` values as needed.
