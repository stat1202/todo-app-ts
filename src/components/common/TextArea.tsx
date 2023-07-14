import React, { useState } from 'react'


type Props={
  text: string;
  areaRef: React.RefObject<HTMLTextAreaElement>
}

function TextArea( {text, areaRef}: Props) {
  const [value, setValue] = useState<string>(text)
  return (
      <textarea value={value} onChange={(e) => setValue(e.target.value)}
      id="desc_input" ref={areaRef}
      className='w-full border-zep border resize-none mt-4 outline-none py-2 px-3 text-sm rounded-md' rows={15}/>
  )
}

export default TextArea