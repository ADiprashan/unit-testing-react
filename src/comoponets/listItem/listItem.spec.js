import React from "react";
import { findByTestAtrr, checkProps } from "../../Utils";
import { shallow } from "enzyme";
import ListItem from "./index";

describe("SharedButton", () => {
  describe("Check Proptypes", () => {
    it("Should not throw warning", () => {
      const expectedProps = {
        title: "Example title Text",
        desc: "Example desc Text"
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example title Text",
        desc: "Example desc Text"
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Should Render without error", () => {
      const listItem = findByTestAtrr(wrapper, "listItemComponent");
      expect(listItem.length).toBe(1);
    });

    it("Should Render a title", () => {
      const title = findByTestAtrr(wrapper, "titleComponent");
      expect(title.length).toBe(1);
    });

    it("Should Render a desc", () => {
      const desc = findByTestAtrr(wrapper, "descComponent");
      expect(desc.length).toBe(1);
    });
  });

  describe("Should not render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Example desc Text"
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it("Component not rendered", () => {
      const listItem = findByTestAtrr(wrapper, "listItemComponent");
      expect(listItem.length).toBe(0);
    });
  });
});
