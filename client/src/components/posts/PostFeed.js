import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {deletePost, addLike, removeLike} from '../../actions/postActions'
import classnames from 'classnames'
import './PostFeed.css'

const PostFeed = (props) => {
    const dispatch = useDispatch()
    const onDelete = (id) => {
        dispatch(deletePost(id))
        console.log(id, 'got deleted')
    }
    const {user:{id}} = useSelector(state => state.auth)

    function findUser(likes){
        if(likes.filter(like => like.user === id).length > 0){
            return true
        }else{
            return false
        }
    }

                    {/* <div  key={post._id}>
                    <div >
                        <div>
                        <a href="profile.html">
                            <img src={post.avatar}
                            alt="" />
                        </a>
                        <br />
                        <p>{post.name}</p>
                        </div>
                        <div>
                        <p>{post.text}</p>
                        <p>{mediaData}</p>
                        <button 
                            type="button" 
                            onClick={() => {
                                dispatch(addLike(post._id))
                            }} >
                            +
                            <i className={classnames('fa fa-thumbs-up',{
                                'text-info': findUser(post.likes)
                            })}></i>
                            <span>{post.likes.length }</span>
                        </button>
                        <button 
                            type="button" 
                            onClick={() => {
                                dispatch(removeLike(post._id))
                            }} >
                            <i></i>
                        </button>
                        {
                            post.user === id
                                ?<button 
                                type="button"
                                onClick={() => {onDelete(post._id)}}
                                >
                                    <i>Delete</i>
                                </button>
                                :null
                        }
                        </div>
                    </div>
        </div> */}
    
    return (
        <div className="postFeed" >
        {props.posts.map((post) => {
            let mediaData
            if(post.mediaType === 'image'){
                mediaData = <img src={post.mediaLink} alt="" />
            }
            else if(post.mediaType === 'pdf'){
                mediaData = <a style={{textDecoration:"none"}} target="_blank" href={post.mediaLink}>
                    <img src="https://bit.ly/3kectjI" alt="" />
                    Open PDF
                </a>
            }
            else if(post.mediaType === 'word'){
                mediaData = <a style={{textDecoration:"none"}} target="_blank" href={post.mediaLink}>
                    <img src="https://bit.ly/3bJJAHm" alt="" />
                    Download attached file
                </a>
            }
            else if(post.mediaType === 'audio'){
                mediaData = <audio controls src={post.mediaLink}></audio>
            }
            else if(post.mediaType === 'video'){
                mediaData = <video controls height="250px" width="500px" src={post.mediaLink}></video>
            }
            const date = new Date(post.date)
            return(
                <div className="postFeedCard">
                    <div className="header">
                        <img src={post.avatar} alt="" />
                        <div className="details">
                            <div className="name">{post.name}</div>
                            <div className="date">{date.toDateString()}</div>
                        </div>
                    </div>
                    <div className="text">
                        {post.text}
                    </div>
                    <div className="media">{mediaData}</div>
                    <div 
                        className="reaction"
                        >
                        <img
                        onClick={() => {
                                dispatch(addLike(post._id))
                            }}  className="like" src="https://bit.ly/2ZZAL9z" alt="" />
                        <p className="count">{post.likes.length}</p>
                        {
                            findUser(post.likes) ?
                            <img  onClick={() => {
                                dispatch(removeLike(post._id))
                            }} className="unLike" src="https://bit.ly/3BQykU4" alt="" /> :null
                        }
                    </div>
                    <div className="action">
                    {
                            post.user === id
                                ?<button 
                                type="button"
                                onClick={() => {onDelete(post._id)}}
                                >
                                    <i>Delete</i>
                                </button>
                                :null
                        }
                    </div>
                </div>
            )
        })}

      </div>
    )
}

export default PostFeed