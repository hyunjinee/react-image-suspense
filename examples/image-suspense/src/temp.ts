type Resource<Payload> = {
  read: () => Payload
}

type status = 'pending' | 'success' | 'error'

export const createResource = <Payload>(
  asyncFn: () => Promise<Payload>
): Resource<Payload> => {
  let status: status = 'pending'

  let result: any

  const promise = asyncFn().then(
    (r: Payload) => {
      status = 'success'
      result = r
    },
    (e: Error) => {
      status = 'error'
      result = e
    }
  )

  return {
    read(): Payload {
      switch (status) {
        case 'pending':
          throw promise
        case 'error':
          throw result
        case 'success':
          return result
      }
    },
  }
}
