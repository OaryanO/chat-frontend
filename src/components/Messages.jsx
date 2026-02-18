// import React from 'react'
// import Message from './Message'
// import useGetMessages from '../hooks/useGetMessages';
// import { useSelector } from "react-redux";
// import useGetRealTimeMessage from '../hooks/useGetRealTimeMessage';

// const Messages = () => {
//     useGetMessages();
//     useGetRealTimeMessage();
//     const { messages } = useSelector(store => store.message);
//     return (
//         <div className='px-4 flex-1 overflow-auto'>
//             {
//                messages && messages?.map((message) => {
//                     return (
//                         <Message key={message._id} message={message} />
//                     )
//                 })
//             }

//         </div>


//     )
// }


import React from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages';
import { useSelector } from "react-redux";
import useGetRealTimeMessage from '../hooks/useGetRealTimeMessage';

const Messages = () => {
    useGetMessages();
    useGetRealTimeMessage();

    const { messages } = useSelector(store => store.message);

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {messages?.length > 0 ? (
                messages.map((msg) =>
                    msg ? <Message key={msg._id} message={msg} /> : null
                )
            ) : (
                <p className="text-center text-gray-400 mt-4">
                    No messages yet
                </p>
            )}
        </div>
    )
}

export default Messages;

// export default Messages
