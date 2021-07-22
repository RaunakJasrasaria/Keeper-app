import React from "react";

function CreateArea(props) {

  const[note,setNote]=React.useState({
    title:"",
    content:""
  });

    function handleChange(event){
      const inputName=event.target.name;
      const inputValue=event.target.value;

      setNote(function(prevValue){
        return{
          ...prevValue,
          [inputName] : inputValue
        };
      });
    }

    function submitNote(event){
      props.handleClick(note)
      setNote({
        title:"",
        content:""
      });
      event.preventDefault();
    }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
