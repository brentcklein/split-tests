import React from "react";

import { SplitTreatments } from "@splitsoftware/splitio-react";

const SplitComponent = ({ splits }) => {
  return splits.map(split => {
    return (
      <SplitTreatments names={[split]} key={split}>
        {({ treatments, isReady }) => {
          return isReady && treatments[split].treatment === "on"
            ? <div>Split {split} is on</div>
            : <div>Split {split} is off</div>;
        }}
      </SplitTreatments>
    );
  });
}

export default SplitComponent;
