import App from "./App";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "./Utils";
import React from "react";

const setUp = initilSate => {
  const store = testStore(initilSate);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initilSate = {
      posts: [
        {
          title: "c",
          boday: "b"
        },
        {
          title: "c",
          boday: "b"
        },
        {
          title: "c",
          boday: "b"
        }
      ]
    };
    wrapper = setUp(initilSate);
  });

  it("Should Render without error", () => {
    const Component = findByTestAtrr(wrapper, "appComponent");
    expect(Component.length).toBe(1);
  });
});
