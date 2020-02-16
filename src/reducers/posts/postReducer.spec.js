import { types } from "../../actions/types";
import postsReducer from "./reducer";

describe("Post Reducer", () => {
  it("Sould return default state", () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("Shloud return new State if reciving type", () => {
    const posts = [{ title: "test 1" }, { title: "test 2" }];
    const newState = postsReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });
});
