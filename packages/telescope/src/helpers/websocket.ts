export const webSocket = `

import WebSocket from 'isomorphic-ws';

const send = (ws: WebSocket, method: string, params: string[]) => {
    ws.send(JSON.stringify({
      "method": method,
      "params": params,
      "id": "1",
      "jsonrpc": "2.0"
    }));
}

const onOpen = (ws: WebSocket) => {
    ws.on('open', function open() {
        let timeout = setTimeout(function () {
            console.log('Connection timed out! Please check your endpoint');
        }, 5000);
  
        // if the connection is not timed out
        if (!timeout) {
            console.log('Connected to WebSocket');
        }
    });
}

const onClose = (ws: WebSocket) => {
    ws.on('close', function close() {
        console.log('disconnected');
    });
}

const onMessage = (ws: WebSocket) => {
    let finalData = JSON.parse(data.toString('utf-8'));
        if (finalData.result.data)
            console.log("------------------------------------------------------");
            console.log(finalData.result);
}

`