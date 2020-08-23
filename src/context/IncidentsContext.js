import React, { useState } from 'react'

const Context = React.createContext({})

export function IncidentsContextProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [incidents, setIncidents] = useState([])
  const [currentDate, setCurrentDate] = useState('')

  return (
    <Context.Provider
      value={{
        loading,
        error,
        incidents,
        currentDate,
        setLoading,
        setError,
        setIncidents,
        setCurrentDate,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
