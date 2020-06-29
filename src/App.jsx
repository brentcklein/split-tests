import React from 'react';
import './App.css';

import { SplitFactory } from "@splitsoftware/splitio-react";

import ExampleSplitComponent from "./ExampleSplitComponent";

function App() {
  const splitConfig = {
    core: {
      authorizationKey: "localhost",
      key: "default",
    },
    features: {
      [`prod-feature-1`]: "on",
      [`prod-feature-2`]: "off",
    },
  };

  

  return (
    <SplitFactory config={splitConfig}>
      <ExampleSplitComponent splits={["prod-feature-1", "prod-feature-2"]} />
    </SplitFactory>
  );
}

export default App;
