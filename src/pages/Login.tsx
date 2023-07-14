import React, { useEffect } from 'react'
import {KeyboardEvent, useRef } from "react"
import {useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();  
  const inputRef= useRef<HTMLInputElement>(null)
  const keyDown = (e:KeyboardEvent<HTMLInputElement>) => {
    const value = inputRef.current!.value
    if(e.key === "Enter"){
      if(value){
        localStorage.setItem("name", value)
        navigate("/daily-todo")
      }
      // console.log("Enter")
    }
  }

  useEffect(() => {
    // console.log(localStorage.getItem("name"))
    if(localStorage.getItem("name")){
      navigate("/daily-todo")
    }
  
  })
  

  return (
    <div className='w-11/12 max-w-sm m-auto h-fit '>
      <h1 className='text-center font-sans-kr font-extrabold text-6xl text-zep'>
        TODO
      </h1>
      <div className='bg-violet-100 mt-3 rounded-md shadow-md'>
        <div className='flex flex-col items-center'>
          <span className='font-sans-kr py-3 pt-5 text-zep'>
            이름을 입력해주세요
          </span>
          <input autoFocus onKeyDown={keyDown} ref={inputRef}
          className='w-11/12 py-2 pl-4 rounded-sm mb-6 outline-none text-sm'/>
        </div>
        
      </div>
    </div>
  )
}

export default Login