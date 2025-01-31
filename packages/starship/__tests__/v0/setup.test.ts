// @ts-nocheck
import path from 'path';
import { ConfigContext, useChain, useRegistry } from 'starshipjs';
import { StargateClient } from '@cosmjs/stargate';

beforeAll(async () => {
  const configFile = path.join(__dirname, '../..', 'configs', 'config.yaml');
  ConfigContext.setConfigFile(configFile);
  ConfigContext.setRegistry(await useRegistry(configFile));
}, 200000);

describe('Test clients', () => {
  let client;

  beforeAll(async () => {
    const { getRpcEndpoint } = useChain('osmosis');
    client = await StargateClient.connect(await getRpcEndpoint());
  }, 200000);

  it('check chain height', async () => {
    const height = await client.getHeight();

    expect(height).toBeGreaterThan(0);
  }, 200000);
});
