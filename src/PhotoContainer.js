import React from 'react'

import Photo from './Photo'

const PhotoContainer = (props) => {
  const photos = props.photos || []

  const displayPhotos = () => {
    return photos.map((photo) => {
      return (
        <Photo
          date={photo.date}
          title={photo.title}
          url={photo.url}
          key={photo.url}
        />
      )
    })
  }

  return <section className="displayList">{displayPhotos()}</section>
}

export default PhotoContainer
// date: "2004-06-30"
// title: "NGC 1531/2: Interacting Galaxies"
// url: "https://apod.nasa.gov/apod/image/0503/ngc1532_gemini.jpg"
