import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Label from "./components/ui/label";

describe("Label component", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Label>My Label</Label>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
