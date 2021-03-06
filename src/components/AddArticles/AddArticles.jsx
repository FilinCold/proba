import React, {useState} from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

const AddArticles = () => {
  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty()
  })
  const [data, setData] = useState([])
  let changeEditorState = (editorState) => {
    setEditorState(editorState);
  }
  const [check, setCheck] = useState(false);
  const showData = () => {
    const dataText = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    // const dataText = convertFromRaw(editorState.getCurrentContent());
    // console.log(dataText)
    setData(() => {
      return {
        ...data,
        dataText
      }
    });
    setCheck(true);
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
      <button onClick={showData}>Add</button>
    </div>
  )
}


export default AddArticles;