import { useState } from "react"

export const useFilterBar = () => {
  const [description, setDescription] = useState<string>('');  
  const [from, setFrom] = useState<string>(''); 
  const [to, setTo] = useState<string>(''); 

  const onSubmit = () => {
    console.log("desc", description);
    console.log("desc", from);
    console.log("desc", to);
  }

  return {
    setDescription,
    setFrom,
    setTo,
    action: onSubmit
  }
}
