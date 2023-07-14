import React, {useState} from 'react'
import { TodoContent } from '../pages/DailyTodo'
import { useSetRecoilState } from "recoil"
import { clickIdState, isOpenState } from '../recoil/todo'

export type TodoProps={
  todo: TodoContent
  todos: TodoContent[]
  setTodos: React.Dispatch<React.SetStateAction<TodoContent[]>>;
}


function Todo( {todo, todos, setTodos}:TodoProps) {
  const [isComplete, setComplete] = useState(false)
  const {id, title, description} = todo
  const setOpen = useSetRecoilState<boolean>(isOpenState)
  const setClickId = useSetRecoilState<string>(clickIdState)
  return (
    <div className='cursor-pointer shadow-md' onClick={()=> {
      setComplete(!isComplete)
      }} id={id}>
      {
      <div className={ `rounded-md relative z-0 duration-300 ${isComplete ? "bg-violet-100" : "bg-neutral-100"}`}>
        <p className='px-12 py-3 text-ellipsis overflow-hidden w-full whitespace-nowrap'>{title}</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 absolute top-1/2 right-3 -translate-y-1/2 text-zep cursor-pointer duration-300 hover:translate-x-2 p-1"
        onClick={(e) => {e.stopPropagation()
          setOpen(true)
          setClickId(id)
        }}>
          <path fillRule="evenodd" d="M10.21 14.77a.75.75 0 01.02-1.06L14.168 10 10.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M4.21 14.77a.75.75 0 01.02-1.06L8.168 10 4.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
        </svg>
      </div>
      }
    </div>
  )
}

export default Todo