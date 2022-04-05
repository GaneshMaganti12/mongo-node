import React, {useContext} from 'react'
import { store } from './App'

export default function ComponentThree() {
    const[data, setData] = useContext(store)

  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}
