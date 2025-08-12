import React, { useState } from "react";
import { tokenize, detokenize, getMapping } from "./tokenizer";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const [tokens, setTokens] = useState([]);
  const [manualTokens, setManualTokens] = useState("");
  const [showMapping, setShowMapping] = useState(false);
  const [decodedText, setDecodedText] = useState("");

  const handleTokenize = () => {
    const result = tokenize(text);
    setTokens(result);
  };

  const handleDetokenize = () => {
    setText(detokenize(tokens));
  };

  const handleManualDecode = () => {
    setDecodedText(detokenize(manualTokens));
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1>Custom Dynamic Tokenizer</h1>
        <h6>As the user types text into the input box, the app dynamically creates a mapping between each character in the input and its corresponding token ID starting from 1.</h6>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text here..."
        />

        <div className="button-row">
          <button onClick={handleTokenize}>Tokenize</button>
          <button onClick={handleDetokenize}>Detokenize</button>
          <button onClick={() => setShowMapping(true)}>View Mapping</button>
        </div>

        <div className="output">
          <h2>Tokens:</h2>
          <p>{tokens.join(", ")}</p>
        </div>

        <div className="manual-section">
          <h3>Manual Token Decode</h3>
          <input
            type="text"
            placeholder="Enter tokens e.g. 65,66,67"
            value={manualTokens}
            onChange={(e) => setManualTokens(e.target.value)}
          />
          <button onClick={handleManualDecode}>Decode</button>
          {decodedText && <p><strong>Decoded:</strong> {decodedText}</p>}
        </div>
      </div>

      {showMapping && (
        <div className="modal-overlay" onClick={() => setShowMapping(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Character Mapping</h2>
            <div className="mapping-header">
              <span>Token ID</span>
              <span>Character</span>
            </div>
            <div className="mapping-grid">
              {getMapping().map(({ char, token }) => {
                let displayChar = char;
                if (char === " ") displayChar = "SPACE";
                if (char === "\n") displayChar = "NEWLINE";
                if (char === "\t") displayChar = "TAB";
                if (char === "\r") displayChar = "CARRIAGE RETURN";
                return (
                  <div key={token} className="mapping-item">
                    <span className="mapping-token">{token}</span>
                    <span className="mapping-char">{displayChar}</span>
                  </div>
                );
              })}
            </div>
            <button className="close-btn" onClick={() => setShowMapping(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
