import React from "react";
import { SplitFactory } from "@splitsoftware/splitio-react";
import ExampleSplitComponent from "./ExampleSplitComponent";
import { render, waitForElement, getByText } from "@testing-library/react";

it("renders the proper output based on the Split treatment", async () => {
  const splitConfig = {
    core: {
      authorizationKey: "localhost",
      key: "default",
    },
    features: {
      [`test-feature-on`]: "on",
      [`test-feature-off`]: "off",
    },
  };

  const { container } = render(
    <SplitFactory config={splitConfig}>
      <ExampleSplitComponent splits={["test-feature-on", "test-feature-off"]} />
    </SplitFactory>
  );

  const [ featureOn, featureOff ] = await waitForElement(
    () => [
      getByText(container, "Split test-feature-on is on"),
      getByText(container, "Split test-feature-off is off"),
    ],
    { container }
  );

  expect(featureOn).toBeTruthy();
  expect(featureOff).toBeTruthy();
});