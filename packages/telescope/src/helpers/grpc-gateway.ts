export const grpcGateway = `

export interface InitReq extends RequestInit {
    pathPrefix?: string
}


export function fetchReq<I, O>(path: string, init?: InitReq): Promise<O> {
    const {pathPrefix, ...req} = init || {}
  
    const url = pathPrefix ? \`\${pathPrefix}\${path}\` : path
  
    return fetch(url, req).then(r => r.json().then((body: O) => {
      if (!r.ok) { throw body; }
      return body;
    })) as Promise<O>
  }
`