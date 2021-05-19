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
  const [dataForm, setDataForm] = useState({
    title: '',
    hashtag: '',
    description: '',
  })
  const [data, setData] = useState([])
  const showData = () => {
    // console.log(`==========>dataForm.hashTag`, dataForm.hashtag);
    const dataText = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    addPost({
      title: dataForm.title,
      hashtag: dataForm.hashtag,
      description: dataForm.description,
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
  const changeDataInput = (e,type) => {
    setDataForm((prevProps) => {
      return {
        ...prevProps,
        [type]: e.target.value
      }
    })
  }

  return (
    <div className='wrapper__post'>
      <div className="block__title-subtitle">
        <div className="style__title">
          <span>Title: </span>
          <input onChange={(e) => {
            changeDataInput(e, 'title')
          }} type="text"/>
        </div>
        <div className="style__hashtag">
          <span>HashTag: </span>
          <input onChange={(e) => {
            changeDataInput(e, 'hashtag')
          }} type="text"/>
        </div>
        <div className="style__description">
          <span>Description: </span>
          <textarea onChange={(e) => {
            changeDataInput(e, 'description')
          }} type="text"/>
        </div>
      </div>

      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={changeEditorState}
      />
      <button className='button__addPost' onClick={showData}>Add</button>
      {/*<div dangerouslySetInnerHTML={data ? {__html: data.join('')} : null}>*/}
      {/*</div>*/}
    </div>
  )
}

export default AddArticles;