import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import { useState } from "react"

const FAQ = ({question, answer}) => {

  const [isShowing, setShowing] = useState(false);

  return (
    <article className='faq' onClick={()=> setShowing(prev => !prev)}>
        <div>
            <h4>{question}</h4>
            <button className='faq__icon' >
                {
                    isShowing ? <AiOutlineMinus/> : <AiOutlinePlus/> 
                }
            </button>
        </div>
        {isShowing && <p>{answer}</p>}
    </article>
  )
}

export default FAQ