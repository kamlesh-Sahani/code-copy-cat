import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import "./codeCopyCat.css";
import {
  atomOneDark,
  dracula,
  nightOwl,
  github,
  a11yLight,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";
interface PropsType {
  language?: string;
  code?: any;
  theme?: string;
  isCopy?: boolean;
  isHead?: boolean;
  wrapLines?:boolean;
}

const CodeCopyCat = (props: PropsType) => {
  const {
    theme = "nightOwl",
    isHead = true,
    language = "HTML",
    isCopy=true,
    wrapLines=true,
    code=`// example 
    <This> is our <code> 
    `
   
  } = props;
  const getTheme = (theme: string) => {
    switch (theme) {
      case "atomOneDark":
        return atomOneDark;
      case "dracula":
        return dracula;
      case "nightOwl":
        return nightOwl;
      case "github":
        return github;
      case "a11yLight":
        return a11yLight;
      case "atomOneLight":
        return atomOneLight;
      default:
        return nightOwl;
    }
  };
  const styleTheme:any = getTheme(theme);
  const [copyBtnText,setCopyBtnText] = useState<string>("Copy");
  const copyHandler = ()=>{
    navigator.clipboard.writeText(code);
    setCopyBtnText("Copied!");
    setTimeout(()=>{
      setCopyBtnText("Copy");
    },500)
  }
  return (
    <div
      className="code-block-css-container"
      style={{
        background: styleTheme.hljs.background,
        color: styleTheme.hljs.color,
      }}
    >
      {isHead && (
        <div className="code-block-css-title">
          <p style={{ color: styleTheme.hljs.color }}>{language}</p>
          {isCopy && (
            <button
              style={{
                background: "transparent",
                color: styleTheme.hljs.color,
                border:`1px solid ${styleTheme.hljs.color}`
              }}
              onClick={copyHandler}
            >
              {copyBtnText}
            </button>
          )}
        </div>
      )}

      <div className="code-block-css-code">
        <SyntaxHighlighter language={language} style={styleTheme} wrapLongLines={wrapLines} >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export {CodeCopyCat};
