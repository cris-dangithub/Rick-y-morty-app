import axios from "axios"
import { useEffect, useState } from "react"


const useFetch = (id) => {
  const [ubication, setUbication] = useState()
  const [inputText, setInputText] = useState()

  const handleSubmit = event => {
    event.preventDefault()
    console.log("Hola");
    console.log(event.target.inputText.value);
    setInputText(event.target.inputText.value)
  }
  useEffect(() => {
    let linkAPI
    if (!inputText) {
      const locationID = Math.floor(Math.random() * 126) + 1;
      linkAPI = `https://rickandmortyapi.com/api/location/${locationID}`
    } else {
      linkAPI = `https://rickandmortyapi.com/api/location/${inputText}`
    }
    axios.get(linkAPI)
      .then(res => setUbication(res.data))
      .catch(err => alert("ID inválido, solamente del 1 al 126"))
  }, [inputText])

  return { ubication, setUbication, handleSubmit }

}

export default useFetch
