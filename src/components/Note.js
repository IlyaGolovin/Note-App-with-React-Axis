import React from 'react'

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'make not important' : 'make important'

  return (
    <li className='note'>
      {note.content}
      <button onClick={toggleImportance}>{label}{note.id}</button>
    </li>
  )
}

export default Note


// const promise = axios.get('http://localhost:3001/notes')

// promise.then(response => {
//   console.log(response)
// })