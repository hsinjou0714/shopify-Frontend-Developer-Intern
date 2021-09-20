import React, {useState} from 'react'
import './photo.scss'
const Photo = (props) => {
  const [likeStatus, setLikeStatus] = useState('isnt-active')
  console.log(props)
  return (
    <div className="photoElement">
      <img src={props.url} alt="emptyPhoto" />
      <div className="photo_title">{props.title}</div>
      <div className="photo_date">{props.date}</div>

      <div
        className={likeStatus === 'isnt-active' ? 'heart' : 'heart is-active'}
        onClick={() =>
          setLikeStatus(
            likeStatus === 'isnt-active' ? 'is-active' : 'isnt-active',
          )
        }
      ></div>
    </div>
  )
}

export default Photo
{
  /* <button className="likeButton" onClick={() => setLikeStatus(!likeStatus)}>
{likeStatus ? 'unlike' : 'like'}
</button> */
}
