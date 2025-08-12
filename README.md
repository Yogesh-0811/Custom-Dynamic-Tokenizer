# Custom Dynamic Tokenizer

A simple React app that demonstrates a dynamic character-to-token mapping system. As the user types text, the app generates a mapping between each unique character and a token ID, allowing for tokenization and detokenization of text.

## Features

- **Dynamic Tokenization:** Each unique character in the input is assigned a token ID starting from 1.
- **Detokenization:** Convert token arrays back to the original text.
- **View Mapping:** See the current character-to-token mapping in a modal.
- **Manual Token Decode:** Input a list of token IDs to decode them back to text.

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd tokenizer
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App

```sh
npm start
# or
yarn start
```

The app will be available at `http://localhost:3000`.

## Usage

1. Enter text in the textarea.
2. Click **Tokenize** to see the token IDs for your input.
3. Click **Detokenize** to convert tokens back to text.
4. Click **View Mapping** to see the character-to-token mapping.
5. Use the **Manual Token Decode** section to enter token IDs (comma-separated) and decode them.

## Project Structure

```
tokenizer/
├── public/
├── src/
│   ├── App.jsx
│   ├── tokenizer.js
│   └── App.css
├── package.json
└── README.md
```

- **App.jsx:** Main React component.
- **tokenizer.js:** Contains the logic for tokenization, detokenization, and mapping.
- **App.css:** Basic styles for the app.

## Example

- Input: `hello`
- Tokens: `1,2,3,3,4` (where `h=1, e=2, l=3, o=4`)
- Mapping:  
  | Token ID | Character |
  |----------|-----------|
  |    1     |     h     |
  |    2     |     e     |
  |    3     |     l     |
  |    4     |     o     |

## Screenshots

<img width="1913" height="915" alt="Screenshot 2025-08-12 183913" src="https://github.com/user-attachments/assets/129270ab-6322-464f-936f-26cb84cef77c" />
<img width="1916" height="1026" alt="Screenshot 2025-08-12 183828" src="https://github.com/user-attachments/assets/7e2fc4ba-e174-45e7-aa67-35b2b3cb3960" />




