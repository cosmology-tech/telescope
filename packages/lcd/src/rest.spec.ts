import { LCDClient } from "./rest";

it('createLcdClient', async () => {
  let client = new LCDClient({ restEndpoint: "http://localhost:1317" });
  expect(client.restEndpoint).toBe("http://localhost:1317/");
  expect(client.timeout).toBe(10000);

  client = new LCDClient({ restEndpoint: "http://localhost:1317/", timeout: 20000 });
  expect(client.restEndpoint).toBe("http://localhost:1317/");
  expect(client.timeout).toBe(20000);
});
