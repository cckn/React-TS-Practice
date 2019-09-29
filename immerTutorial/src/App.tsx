import React, { useRef, useCallback, useState } from 'react'
import produce from 'immer'

interface IInfo {
  id: number
  name: string
  username: string
}

interface IForm {
  [inputName: string]: string
}
interface IData {
  array: IInfo[]
  uselessValue: string | null
}
const App: React.FC = () => {
  const nextId = useRef(1)
  const [form, setForm] = useState<IForm>({ name: '', username: '' })
  const [data, setData] = useState<IData>({ array: [], uselessValue: null })

  const onChange = useCallback((e) => {
    const { name, value } = e.target
    setForm(
      produce((draft: IForm) => {
        draft[name] = value
      }),
    )
  }, [])

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      }

      setData(
        produce((draft: IData) => {
          draft.array.push(info)
        }),
      )

      setForm({
        name: '',
        username: '',
      })
      nextId.current += 1
    },
    [form.name, form.username],
  )

  const onRemove = useCallback((id) => {
    setData(
      produce((draft: IData) => {
        draft.array = draft.array.filter((info) => info.id !== id)
      }),
    )
  }, [])
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => {
            const { id, username, name } = info
            return (
              <li key={id} onClick={() => onRemove(id)}>
                {username} ({name})
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App
