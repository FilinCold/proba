import React, {useState} from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';

const AddArticles = () => {
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty()
  })
  let changeEditorState = (editorState) => {
    setEditorState(editorState);
  }
  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={changeEditorState}
      />
    </div>
  )
}


export default AddArticles;