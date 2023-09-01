import { useState } from "react"
type MarkValue = '' | 'X' | 'O';
export default function Cell(){
  const [cellValue,setCellValue]= useState<MarkValue>('');
  const markCell = ()=>{
    setCellValue('X');
  } 
  return(
    <button onClick={markCell}>{cellValue}</button>
  )
}