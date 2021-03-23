import React from "react";
import Header  from "./Header";
import Footer from "./Footer" ;
import Note from "./Note";
import Notes from "../notes";

function App(){
  return(
        <div>
          <div>
            <Header />
          </div>
          <div className="dictionary">
            {Notes.map((noteEntry) =>
                <Note 
                  key={noteEntry.key}
                  noteTitle={noteEntry.title}
                  noteMessage={noteEntry.content}
                />
            )}
          </div>
          <div>
            <Footer />
          </div>
        </div>
  );
}

export default App;