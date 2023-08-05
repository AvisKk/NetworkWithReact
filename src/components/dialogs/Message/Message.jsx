import s from './Message.module.css'

const Message = (props) => {

    return (
        <div className={props.src ? s.message : s.outgoing}>
            {props.message}

        </div>
    )
}

export default Message;
