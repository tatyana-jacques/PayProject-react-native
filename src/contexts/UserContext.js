import React, { createContext, useState } from "react"

export const UserContext = createContext({})

export default function UserProvider({ children }) {

    const [loggedId, setLoggedId] = useState("")
    const [loggedName, setLoggedName] = useState("")
    const [loggedCpf, setLoggedCpf] = useState("")
    const [loggedContact, setLoggedContact] = useState("")
    const [loggedRG, setLoggedRG] = useState("")

    return (
        <UserContext.Provider value={{
            loggedId,
            loggedName,
            loggedCpf,
            loggedContact,
            loggedRG,
            setLoggedId,
            setLoggedName,
            setLoggedCpf,
            setLoggedContact,
            setLoggedRG
        }}>
            {children}
        </UserContext.Provider>

    )
}