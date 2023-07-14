import React, { KeyboardEvent, useRef } from 'react'
import { TodoContent } from '../pages/DailyTodo';
import uuid from 'react-uuid';

type Props = {
  setTodos: React.Dispatch<React.SetStateAction<TodoContent[]>>;
}

function TodoInput({setTodos}: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  // const now = new Date();
  
  const addTask = () => {
    const title = inputRef.current!.value
    if( title){
      setTodos(prev => [...prev,
        {
          id: uuid(), 
          // date: `${now.getFullYear()}-${now.getMonth() >=10  ? now.getMonth() : '0' + now.getMonth()}-${now.getDate()}`, 
          title: title, 
          description: title
        }])
      
    }
  
    inputRef.current!.value = ""
    inputRef.current!.focus()
  }

  const handleKeyDown = (e:KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
      addTask()
    }
  }

  return (
    <div className='relative shadow-md'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 absolute top-1/2 left-3 duration-300 -translate-y-1/2 text-zep cursor-pointer rounded-full hover:text-white hover:bg-zep
      "
      onClick={addTask}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
      <input autoFocus ref={inputRef}
      placeholder='일정을 입력해주세요' onKeyDown={handleKeyDown}
      className='w-full bg-neutral-100 py-3 text-md px-5 pl-12 rounded-md outline-none'/>
    </div>
  )
}

export default TodoInput