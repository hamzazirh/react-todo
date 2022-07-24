import { useState } from "react"

export default function Form({ todos, setTodos }) {
    const [form, setForm] = useState("")
    const changeInput = (e) => {
        setForm(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (form === "") {
            alert("Boş Bırakılamaz..")
        }

        setTodos([...todos, { id: Math.floor((Math.random() * 100000) + 1), title: form, status: false }])
        setForm('')
    }


    return (
        <form onSubmit={submitForm}>
            <input className="new-todo" placeholder='What needs to be done?' autoFocus value={form} onChange={changeInput} />
        </form>
    )
}
