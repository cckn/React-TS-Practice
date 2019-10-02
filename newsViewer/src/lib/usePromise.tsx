import { useState, useEffect } from 'react'
import { AxiosResponse } from 'axios'

const usePromise = (
  promiseCreator: () => Promise<any>,
  deps: Array<any>,
): [boolean, AxiosResponse | null, string | null] => {
  const [loading, setLoading] = useState<boolean>(false)
  const [resolved, setResolved] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const process = async () => {
      setLoading(true)
      try {
        const resolved = await promiseCreator()
        setResolved(resolved)
      } catch (e) {
        setError(e)
      }
      setLoading(false)
    }
    process()
  }, deps)
  return [loading, resolved, error]
}

export default usePromise
