import { MsgCreateBidResponse, MsgCloseBidResponse, MsgCreateBid, MsgCloseBid } from "../../../akash/market/v1beta2/bid";
import { MsgWithdrawLeaseResponse, MsgCreateLeaseResponse, MsgCloseLeaseResponse, MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "../../../akash/market/v1beta2/lease";
/** Msg defines the market Msg service */
export interface Msg {
    /** CreateBid defines a method to create a bid given proper inputs. */
    CreateBid(request: MsgCreateBid): Promise<MsgCreateBidResponse>;
    /** CloseBid defines a method to close a bid given proper inputs. */
    CloseBid(request: MsgCloseBid): Promise<MsgCloseBidResponse>;
    /** WithdrawLease withdraws accrued funds from the lease payment */
    WithdrawLease(request: MsgWithdrawLease): Promise<MsgWithdrawLeaseResponse>;
    /** CreateLease creates a new lease */
    CreateLease(request: MsgCreateLease): Promise<MsgCreateLeaseResponse>;
    /** CloseLease defines a method to close an order given proper inputs. */
    CloseLease(request: MsgCloseLease): Promise<MsgCloseLeaseResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateBid(request: MsgCreateBid): Promise<MsgCreateBidResponse>;
    CloseBid(request: MsgCloseBid): Promise<MsgCloseBidResponse>;
    WithdrawLease(request: MsgWithdrawLease): Promise<MsgWithdrawLeaseResponse>;
    CreateLease(request: MsgCreateLease): Promise<MsgCreateLeaseResponse>;
    CloseLease(request: MsgCloseLease): Promise<MsgCloseLeaseResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
