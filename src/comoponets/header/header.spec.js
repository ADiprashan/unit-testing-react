import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findBytestAtrr } from "../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findBytestAtrr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render logo", () => {
    const logo = findBytestAtrr(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
