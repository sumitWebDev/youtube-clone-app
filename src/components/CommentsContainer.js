import React from 'react'
import Comment from './Comment'
function CommentsContainer() {


    const commentsData = [{
        name: "Sumit",
        text : "Lorem Ipsum",
        replies : [
            {
                name: "Sumit Reply 1",
                text : "Lorem Ipsum",
                replies : [
                    {
                        name: "Sumit Sumit Reply 2",
                        text : "Lorem Ipsum",
                    }
                ]
            }
        ]
    },
    {
        name: "Sumit",
        text : "Lorem Ipsum",
        replies : [
            {
                name: "Sumit Reply 1",
                text : "Lorem Ipsum",
                replies : [
                    {
                        name: "Sumit Sumit Reply 2",
                        text : "Lorem Ipsum",
                    }
                ]
            }
        ]
    }

]

const CommentsList = ({comments}) =>{
    return (
        <div>
            {
            comments.map((comment)=>{
                return (
                <>
                <div>
                <Comment data={comment} />
                </div>

                <div className='border-l-2 border-black px-2 mx-2'>
                {

                (comment.replies !== undefined)?<CommentsList comments={comment.replies} /> : ''

                }
                </div>
                </>
                )
            })
            }
        </div>
    )
}
    return (
        <>
        <CommentsList comments={commentsData}/>
        </>
    )
}

export default CommentsContainer
