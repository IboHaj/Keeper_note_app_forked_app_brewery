import React from "react";


function Note (props){
    return(
            <div className="note">
                <dl>
                        <dt><h1 className="term">{props.noteTitle}</h1></dt>
                        <dd><p className="term">{props.noteMessage}</p></dd>
                </dl>
            </div>
    );
}

export default Note;