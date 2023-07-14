import React, { useRef } from 'react'
import { TodoContent } from '../pages/DailyTodo';
import Input from './common/Input';
import TextArea from './common/TextArea';
import { clickIdState, isOpenState, todosState } from '../recoil/todo';
import { useRecoilValue, useRecoilState } from "recoil"

function TodoDescription() {
  const [todos, setTodos] = useRecoilState<TodoContent[]>(todosState)
  const clickId = useRecoilValue<string>(clickIdState)
  const [{id, title, description}] = todos.filter(todo => todo.id === clickId)

  // const date_input = document.getElementById('date_input') as HTMLInputElement
  // const title_input = document.getElementById("title_input") as HTMLInputElement
  // const desc_input = document.getElementById("desc_input") as HTMLTextAreaElement
  const dateRef = useRef<HTMLInputElement>(null)
  const titleRef = useRef<HTMLInputElement>(null)
  const descRef = useRef<HTMLTextAreaElement>(null)
  const [isOpen, setOpen] = useRecoilState<boolean>(isOpenState)

  const handleEdit = () => {

    const new_todos = todos.map( todo => {
      const tmp = {...todo}
      if( todo.id === id){
        // tmp.date = dateRef.current!.value
        tmp.title = titleRef.current!.value
        tmp.description = descRef.current!.value
      }
      return tmp 
    })

    setTodos(new_todos)
    setOpen(false)
  }

  const handleRemove = () => {
    const tmp = todos.filter( todo => todo.id !== id)
    setTodos(tmp)
    setOpen(false)
  }

  return (
    <div className={`absolute z-10 top-0 w-72 h-screen bg-white shadow-xl py-2 animate-modal-appear`}>
      <svg
      onClick={() => setOpen(false)}
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6 text-zep duration-300 rounded-full active:text-white active:bg-zep ml-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <div className='pt-28 flex flex-col justify-between h-[calc(100vh-32px)]'>
        <div className='bg-white w-full px-2'>

          {/* <div className='mb-4'>
            <span>Date</span>
            <Input type="date" text={date} inputRef={dateRef}/>
          </div> */}

          <div className='mb-4'>
            <span>Title</span>
            <Input type="text" text={title} inputRef={titleRef}/>
          </div>
          
          <div className='mb-4'>
            <span>Descripton</span>
            <TextArea text={description} areaRef={descRef}/>
          </div>

        </div>
        <div className='flex flex-col gap-2 pb-3 px-2 bg-white'>
          <button 
          onClick={handleEdit}
          className='bg-zep py-3 rounded-md text-center flex justify-center text-white items-center duration-300 hover:bg-violet-400'>
              Edit
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2">
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                </svg>
          </button>
          <button 
          onClick={handleRemove}
          className='bg-zep py-3 rounded-md text-center flex justify-center text-white items-center duration-300 hover:bg-violet-400'>
            Remove
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2">
              <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
            </svg>

          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoDescription