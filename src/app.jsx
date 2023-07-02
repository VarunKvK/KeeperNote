import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import notes from "./notes";

function app() {
  return (
    <div>
      <Header />
      {notes.map((data) => {
        <Note key={data.key} Title={data.title} Desc={data.content} />;
      })}
      <Footer />
    </div>
  );
}

export default app;
