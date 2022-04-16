
import { coin } from '@cosmjs/amino';
import { AminoConverter } from '../../src/proto/osmosis/lockup/tx.aminos';
import { osmosis } from '../../src/proto';
import Long from 'long';

it('json', () => {
    expect(Object.keys(osmosis.gamm.v1beta1.json)).toMatchSnapshot();
});

it('toJSON', () => {
    expect(Object.keys(osmosis.gamm.v1beta1.toJSON)).toMatchSnapshot();
});

it('fromJSON', () => {
    expect(Object.keys(osmosis.gamm.v1beta1.fromJSON)).toMatchSnapshot();
});

it('messages', () => {
    expect(Object.keys(osmosis.gamm.v1beta1.messages)).toMatchSnapshot();
});

it('encoded', () => {
    expect(Object.keys(osmosis.gamm.v1beta1.encoded)).toMatchSnapshot();
});
