import React from "react";
import "./App.css";

const nodes = [
  {
    id: "main",
    label: "MAIN UI",
    description: "The Main UI is the central menu for navigation.",
    top: "40%",
    left: "45%",
    linksTo: ["chatbot", "api", "automation", "search"],
  },
  {
    id: "chatbot",
    label: "NLP CHATBOT",
    description: "Interacts with users using natural language.",
    top: "20%",
    left: "65%",
    linksTo: [],
  },
  {
    id: "api",
    label: "API SERVICES",
    description: "Provides REST APIs for external integrations.",
    top: "50%",
    left: "70%",
    linksTo: [],
  },
  {
    id: "automation",
    label: "AUTOMATION",
    description: "Handles background automation tasks.",
    top: "50%",
    left: "20%",
    linksTo: [],
  },
  {
    id: "search",
    label: "DEEP SEARCH",
    description: "Allows advanced semantic search capabilities.",
    top: "70%",
    left: "45%",
    linksTo: [],
  },
  {
    id: "portfolio",
    label: "PORTFOLIO",
    description: "My projects.",
    top: "80%",
    left: "10%",
    linksTo: [],
  },
  {
    id: "portfolio",
    label: "PORTFOLIO",
    description: "My projects.",
    top: "80%",
    left: "10%",
    linksTo: [],
  },
];

const App = () => {
  const handleClick = (label) => {
    console.log(`Navigating to: ${label}`);
    // Optionally use: navigate(`/your-route`)
  };

  return (
    <div className="network-container">
      <svg className="connections">
        {nodes.map((node) =>
          node.linksTo.map((targetId) => {
            const source = node;
            const target = nodes.find((n) => n.id === targetId);
            if (!target) return null;

            // Parse positions to calculate lines
            const x1 = parseFloat(source.left);
            const y1 = parseFloat(source.top);
            const x2 = parseFloat(target.left);
            const y2 = parseFloat(target.top);

            return (
              <line
                key={`${source.id}-${target.id}`}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="azure"
                strokeWidth="5"
              />
            );
          })
        )}
      </svg>
      {nodes.map((node) => (
        <div
          key={node.id}
          className="node"
          style={{ top: node.top, left: node.left }}
          onClick={() =>
            window.open(
              "https://github.com/Momegaii?tab=repositories",
              "_blank"
            )
          }
        >
          <div className="node-label">{node.label}</div>
          <div className="node-description">{node.description}</div>
          <div className="star"></div>
        </div>
      ))}
    </div>
  );
};

export default App;
