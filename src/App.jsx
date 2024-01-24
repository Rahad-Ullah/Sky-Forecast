import { useEffect } from "react"
import { useState } from "react"

function App() {
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)

      console.log('Latitude is: ', lat)
      console.log('Longitude is: ', long)
      console.log('Longitude is: ', long)
    })
  } , [lat, long])
  return (
    <>
      <h1 className="text-3xl text-center">Sky Forecast</h1>
      <h1 className="text-3xl text-center">Setup Git and Github</h1>
      <a href="https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/">FreeCodeCamp Doc</a>
    </>
  )
}

export default App
