import React,{useEffect} from 'react';

interface GetKeyDownProps {
    onKeyDown: (e: KeyboardEvent) => void;
  }
  
const GetKeyDown = ({ onKeyDown }: GetKeyDownProps) => {

    useEffect(()=>{
        const handleKeyDown = (e: KeyboardEvent) => {
            onKeyDown(e);
          };
        document.addEventListener('keydown', handleKeyDown);
        
            return () => {
              document.removeEventListener('keydown', handleKeyDown);
            };
    },[onKeyDown])

    return(
        <></>
    )
}

export default GetKeyDown