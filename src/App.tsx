import { useEffect } from "react";
import { useCounterStore } from "./store/counterStore";
import { shallow } from "zustand/shallow";

const App = () => {
  const { count, title, posts } = useCounterStore(
    (state) => ({
      count: state.count,
      title: state.title,
      posts: state.posts,
    }),
    shallow
  );

  const { increment, getPosts, clearStore, multiply } = useCounterStore();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>
        {title}: {count}
      </h1>
      <button
        onClick={() => {
          increment(10);
        }}
      >
        Increment by 10
      </button>

      <button
        onClick={() => {
          clearStore();
        }}
      >
        Clear
      </button>

      <button
        onClick={() => {
          multiply(2);
        }}
      >
        Multiply by 2
      </button>

      <hr />

      {JSON.stringify(posts)}
    </div>
  );
};
export default App;
