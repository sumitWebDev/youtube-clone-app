import React from 'react'

const Comment = ({data}) => {
    const {name,text} = data
    return (
        <div className='w-[100%] my-2 bg-gray-100'>
            <img className= "w-10" src="https://i.ytimg.com/vi/1uDl6cjH6Mc/maxresdefault.jpg" alt="user-img"/>
            <div>
                <p>Name - {name}</p>
                <p>Comment - {text} </p>
            </div>
        </div>
    )
}

export default Comment
