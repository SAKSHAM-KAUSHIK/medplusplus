import {React,useEffect,useRef,useState} from 'react'
import Avatar from './Avatar'
import SupportWindow from './SupportWindow'

const Chatbot = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setVisible(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    },[ref])

  return (
      <div ref={ref} >
          <SupportWindow visible={visible} />
          <Avatar
              visible={visible}
              onClick={()=>setVisible(true)}
        />
      </div>
  )
}

export default Chatbot
