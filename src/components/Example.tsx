import React from "react";

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import { atomOneLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
SyntaxHighlighter.registerLanguage("javascript", js);

function Code(props: any) {
  const {
    type,
    name,
    additionalImportLine,
    additional,
    from,
    jsx,
    overBackground,
  } = props;

  const snippet = `
  ${additionalImportLine ? additionalImportLine : ""}
  export default () => (
    ${jsx}
  );
  `;
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneLight}
      customStyle={{
        padding: 24,
        paddingTop: 8,
        paddingBottom: 8,
        marginBottom: 0,
        marginTop: 0,
        borderRadius: "0px 0px 4px 4px",
      }}
    >
      {snippet}
    </SyntaxHighlighter>
  );
}

// "rgb(239, 242, 247)"
export default function Example(props: any) {
  return (
    <div>
      <p className="mt-8 mb-2 text-2xl font-semibold">How to use</p>

      <Code {...props} />
      <p className="mt-8 mb-2 text-2xl font-semibold">Result</p>
      <div className="p-4 mt-4 border border-gray-100" {...props}>
        {props.children}
      </div>
    </div>
  );
}
