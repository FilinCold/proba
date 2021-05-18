import React, {useEffect, useState} from "react";
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {EditorState, convertToRaw} from "draft-js";
import draftToHtml from 'draftjs-to-html';

import {addPost} from "../../services";

const AddArticles = () => {

  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty()
  })
  let changeEditorState = (editorState) => {
    setEditorState(editorState);
  }
  const [data, setData] = useState([])
  const showData = () => {
    const dataText = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    addPost({
      text: dataText
    }).then(d => d);
    setData(() => {
      return [dataText]
    });
  }
  useEffect(() => {
    localStorage.removeItem('items');
    localStorage.setItem('items', JSON.stringify(data))
  })

  return (
    <div className='wrapper__post'>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={changeEditorState}
      />
      <button className='button__addPost' onClick={showData}>Add</button>
      <div dangerouslySetInnerHTML={data ? {__html: data.join('')} : null}>
      </div>
    </div>
  )
}

export default AddArticles;