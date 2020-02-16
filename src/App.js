import React from "react";
import Header from "./comoponets/header";
import Headline from "./comoponets/headline";
import "./app.scss";

function App() {
  return (
    <div>
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts!"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
