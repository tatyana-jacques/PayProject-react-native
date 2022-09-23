import React, { createContext, useState } from "react"

export const UserContext = createContext({})

export default function UserProvider({ children }) {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [contact, setContact] = useState("")
    const [RG, setRG] = useState("")

    return (
        <UserContext.Provider value={{ id, name, cpf, contact, RG, setId, setName, setCpf, setContact, setRG }}>
            {children}
        </UserContext.Provider>

    )
}