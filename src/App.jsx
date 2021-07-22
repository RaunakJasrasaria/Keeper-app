import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx"


function App(){

  const[noteList,setNoteList] = React.useState([]);

  function makeNote(note){
    setNoteList(function(prevValue){
      return [...prevValue,note];
    });

  }

  function deleteNote(id){
    setNoteList(function(prevValue){
      return(
        prevValue.filter(function(note,index){
          return(
            index !== id
          );
        })
      );
    });
  }

  return(
    <div>
    <Header />
    <CreateArea
      handleClick={makeNote}
     />

    {noteList.map(function(note,index){
      return(<Note
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        onDelete={deleteNote}
       />);
    }) }


    <Footer />
    </div>
  );
}

export default App;
