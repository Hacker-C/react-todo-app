import { useState, useEffect, useRef } from 'react'

const TodoForm = props => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')
  const { onSubmit } = props
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false
    })

    setInput('')
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add todo'
        value={input}
        onChange={handleChange}
        className={props.edit ? 'todo-input edit' : 'todo-input'}
        ref={inputRef}
      />
      <button className={props.edit ? 'todo-button edit' : 'todo-button'}>
        {props.edit ? 'Update' : 'Add todo'}
      </button>
    </form>
  )
}

export default TodoForm
