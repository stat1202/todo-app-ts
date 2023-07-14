import React, { LegacyRef, useRef, useState } from 'react'

type Props={
  type: "text" | "description" | "date";
  text: string;
  inputRef?: React.RefObject<HTMLInputElement>
}

function Input({type, text, inputRef}:Props) {
  // const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<string>(text)
  
  return (
    <React.Fragment>
    {
      type === "date"
      &&
      <input className='w-full border-zep border mt-4 rounded-md py-2 px-3 outline-none text-sm' type="date" value={value} id="date_input" ref={inputRef}
      onChange={(e) => setValue(e.target.value)} />
    }
    {
      type === "text"
      &&
      <input value={value} onChange={(e) => setValue(e.target.value)} ref={inputRef}
      id="title_input"
      className='w-full border-zep border mt-4 rounded-md py-2 px-3 outline-none text-sm' />
    }
    {
      type === "description"
      &&
      <textarea value={value} onChange={(e) => setValue(e.target.value)}
      id="desc_input"
      className='w-full border-zep border resize-none mt-4 outline-none py-2 px-3 text-sm rounded-md' rows={15}/>
    }
    </React.Fragment>
  )
}

export default Input