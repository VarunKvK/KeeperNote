import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import notes from "./notes";

const currentTime=new Date().getHours();

function app() {
  return (
    <div>
      <Header />
      {notes.map((data) => {
        return <Note key={data.key} Sr={data.key} Title={data.title} Desc={data.content} />;
      })}
      {currentTime>12 && <h1>Why the Fuck You Working</h1>}
      <Footer />
    </div>
  );
}

export default app;
