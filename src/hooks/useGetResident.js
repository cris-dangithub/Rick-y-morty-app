import axios from "axios"
import { useEffect, useState } from "react"

const useGetResident = (resident) => {
  const [residentInfo, setResidentInfo] = useState()
  useEffect(() => {
    const linkAPI = resident
    axios.get(linkAPI)
      .then(res => setResidentInfo(res.data))
      .catch(err => console.log(err))
  }, [])

  return { residentInfo }
}

export default useGetResident