import moxios from "moxios";
import { testStore } from "../Utils";
import { fetchPosts } from "../actions";

describe("fetchPostAction", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store Updated correctly", () => {
    const expectedState =
      ({
        title: "Ex",
        body: "body"
      },
      {
        title: "Ex",
        body: "body"
      },
      {
        title: "Ex",
        body: "body"
      });

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
