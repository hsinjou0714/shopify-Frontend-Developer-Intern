import React, {useEffect, useState} from 'react'

import PhotoContainer from './PhotoContainer'
const Display = (props) => {
  const [photos, setPhotos] = useState()
  const [loader, setloader] = useState(true)

  useEffect(() => {
    fetch(
      'https://api.nasa.gov/planetary/apod?api_key=oarG50jSc9PSMhY1oSxvAYJjE1OYqhitWAm70RRn&count=10',
    )
      .then((response) => {
        if (!response.ok) {
          throw Error('Error during fetch image API')
        }
        setloader(false)
        return response.json()
      })
      .then((data) => {
        console.log('1233')
        setPhotos(data)
      })
      .catch((err) => {
        throw Error(err)
      })
  }, [])
  if (loader) {
    return <div className="loader"></div>
  } else {
    return (
      <section className="displayList">
        <PhotoContainer photos={photos} />
      </section>
    )
  }
}

export default Display
