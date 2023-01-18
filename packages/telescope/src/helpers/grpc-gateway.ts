export const grpcGateway = `

export interface InitReq extends RequestInit {
    pathPrefix?: string
}

export function b64Encode(buffer: Uint8Array, start: number, end: number): string {
	let parts: string[] = null;
  const chunk = [];
  let i = 0, // output index
    j = 0, // goto index
    t;     // temporary
  while (start < end) {
    const b = buffer[start++];
    switch (j) {
      case 0:
        chunk[i++] = b64[b >> 2];
        t = (b & 3) << 4;
        j = 1;
        break;
      case 1:
        chunk[i++] = b64[t | b >> 4];
        t = (b & 15) << 2;
        j = 2;
        break;
      case 2:
        chunk[i++] = b64[t | b >> 6];
        chunk[i++] = b64[b & 63];
        j = 0;
        break;
    }
    if (i > 8191) {
      (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
      i = 0;
    }
  }
  if (j) {
    chunk[i++] = b64[t];
    chunk[i++] = 61;
    if (j === 1)
      chunk[i++] = 61;
  }
  if (parts) {
    if (i)
      parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
    return parts.join("");
  }
  return String.fromCharCode.apply(String, chunk.slice(0, i));
}

export function replacer(key: any, value: any): any {
  if(value && value.constructor === Uint8Array) {
    return b64Encode(value, 0, value.length);
  }

  return value;
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