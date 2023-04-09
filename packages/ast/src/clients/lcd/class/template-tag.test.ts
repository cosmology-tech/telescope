import {
    getUrlTemplateString,
    makeTemplateTag
} from './lcd';
import generate from '@babel/generator';
import { getTestProtoStore } from '../../../../test-utils';
const store = getTestProtoStore();
store.traverseAll();

export const renderTemplateTag = (info) => {
    return generate(makeTemplateTag(info)).code
}

it('/osmosis/{gamm}/v1beta1/estimate/swap_exact_amount_in', () => {
    expect(getUrlTemplateString('/osmosis/{gamm}/v1beta1/estimate/swap_exact_amount_in')).toMatchSnapshot();
})
it('/osmosis/{gamm}/v1beta1/{estimate}/swap_exact_amount_in', () => {
    expect(getUrlTemplateString('/osmosis/{gamm}/v1beta1/{estimate}/swap_exact_amount_in')).toMatchSnapshot();
})
it('/osmosis/{gamm}/{v1beta1}/{estimate}/{swap_exact_amount_in}', () => {
    expect(getUrlTemplateString('/osmosis/{gamm}/{v1beta1}/{estimate}/{swap_exact_amount_in}')).toMatchSnapshot();
})
it('/osmosis/gamm/v1beta1/estimate/{swap_exact_amount_in}', () => {
    expect(getUrlTemplateString('/osmosis/gamm/v1beta1/estimate/{swap_exact_amount_in}')).toMatchSnapshot();
})
it('/cosmos/feegrant/v1beta1/allowance/{granter}/{grantee}', () => {
    expect(getUrlTemplateString('/cosmos/feegrant/v1beta1/allowance/{granter}/{grantee}')).toMatchSnapshot();
})
it('/cosmos/group/v1/vote_by_proposal_voter/{proposal_id}/{voter}', () => {
    expect(getUrlTemplateString('/cosmos/group/v1/vote_by_proposal_voter/{proposal_id}/{voter}')).toMatchSnapshot();
})
it('/cosmos/gov/v1beta1/proposals/{proposal_id}/tally', () => {
    expect(getUrlTemplateString('/cosmos/gov/v1beta1/proposals/{proposal_id}/tally')).toMatchSnapshot();
})
it('/cosmos/staking/v1beta1/validators/{validator_addr}/delegations', () => {
    expect(getUrlTemplateString('/cosmos/staking/v1beta1/validators/{validator_addr}/delegations')).toMatchSnapshot();
})
it('/cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}', () => {
    expect(getUrlTemplateString('/cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}')).toMatchSnapshot();
})
it('/cosmos/gov/v1beta1/proposals/{proposal_id}/votes/{voter}', () => {
    expect(getUrlTemplateString('/cosmos/gov/v1beta1/proposals/{proposal_id}/votes/{voter}')).toMatchSnapshot();
})

/////
// UNIQUE CASES


it('/ibc/apps/transfer/v1/denom_traces/{hash=**}', () => {
    expect(renderTemplateTag({
        method: 'get',
        url: '/ibc/apps/transfer/v1/denom_traces/{hash=**}',
        pathParams: ['hash'],
        queryParams: [],
        paramMap: { hash: 'hash' },
        casing: { hash: 'hash' }
    })).toEqual("`ibc/apps/transfer/v1/denom_traces/${params.hash}`")
})

it('/ibc/apps/fee/v1/channels/{packet_id.channel_id}/ports/{packet_id.port_id}/sequences/{packet_id.sequence}/incentivized_packet', () => {
    expect(renderTemplateTag({
        method: 'get',
        url: '/ibc/apps/fee/v1/channels/{packet_id.channel_id}/ports/{packet_id.port_id}/sequences/{packet_id.sequence}/incentivized_packet',
        pathParams: ['packet_id'],
        queryParams: [],
        paramMap: { packet_id: 'packet_id' },
        casing: { packet_id: 'packet_id' }
    })).toEqual("`ibc/apps/fee/v1/channels/${params.packet_id.channel_id}/ports/${params.packet_id.port_id}/sequences/${params.packet_id.sequence}/incentivized_packet`")
})


/////

it('1', () => {
    expect(renderTemplateTag({
        method: 'get',
        url: '/cosmos/group/v1/vote_by_proposal_voter/{proposal_id}/{voter}',
        pathParams: ['proposal_id', 'voter'],
        queryParams: [],
        paramMap: { proposal_id: 'proposalId', voter: 'voter' },
        casing: { proposal_id: 'proposal_id', voter: 'voter' }
    })).toEqual("`cosmos/group/v1/vote_by_proposal_voter/${params.proposal_id}/${params.voter}`")
})
it('2', () => {
    expect(renderTemplateTag(
        {
            method: 'get',
            url: '/cosmos/gov/v1beta1/proposals/{proposal_id}/tally',
            pathParams: ['proposal_id'],
            queryParams: [],
            paramMap: { proposal_id: 'proposalId' },
            casing: { proposal_id: 'proposal_id' }
        }
    )).toEqual("`cosmos/gov/v1beta1/proposals/${params.proposal_id}/tally`")
})
it('3', () => {
    expect(renderTemplateTag(
        {
            method: 'get',
            url: '/cosmos/staking/v1beta1/validators/{validator_addr}/delegations',
            pathParams: ['validator_addr'],
            queryParams: ['pagination'],
            paramMap: { validator_addr: 'validatorAddr', pagination: 'pagination' },
            casing: { validator_addr: 'validatorAddr', pagination: 'pagination' }
        }
    )).toEqual("`cosmos/staking/v1beta1/validators/${params.validatorAddr}/delegations`")
})
it('4', () => {
    expect(renderTemplateTag(
        {
            method: 'get',
            url: '/cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}',
            pathParams: ['validator_addr', 'delegator_addr'],
            queryParams: [],
            paramMap: { delegator_addr: 'delegatorAddr', validator_addr: 'validatorAddr' },
            casing: { delegator_addr: 'delegatorAddr', validator_addr: 'validatorAddr' }
        }
    )).toEqual("`cosmos/staking/v1beta1/validators/${params.validatorAddr}/delegations/${params.delegatorAddr}`")
})
it('5', () => {
    expect(renderTemplateTag(
        {
            method: 'get',
            url: '/cosmos/gov/v1beta1/proposals/{proposal_id}/votes/{voter}',
            pathParams: ['proposal_id', 'voter'],
            queryParams: [],
            paramMap: { proposal_id: 'proposalId', voter: 'voter' },
            casing: { proposal_id: 'proposal_id', voter: 'voter' }
        }
    )).toEqual("`cosmos/gov/v1beta1/proposals/${params.proposal_id}/votes/${params.voter}`")
})