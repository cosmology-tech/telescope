import * as _825 from "./abci/types";
import * as _826 from "./crypto/keys";
import * as _827 from "./crypto/proof";
import * as _828 from "./libs/bits/types";
import * as _829 from "./p2p/types";
import * as _830 from "./types/block";
import * as _831 from "./types/evidence";
import * as _832 from "./types/params";
import * as _833 from "./types/types";
import * as _834 from "./types/validator";
import * as _835 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _825.CheckTxType;
        checkTxTypeToJSON(object: _825.CheckTxType): string;
        evidenceTypeFromJSON(object: any): _825.EvidenceType;
        evidenceTypeToJSON(object: _825.EvidenceType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _825.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _825.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _825.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _825.ResponseApplySnapshotChunk_Result): string;
        CheckTxType: typeof _825.CheckTxType;
        EvidenceType: typeof _825.EvidenceType;
        Request: {
            encode(message: _825.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.Request;
            fromJSON(object: any): _825.Request;
            toJSON(message: _825.Request): unknown;
            fromPartial<I extends unknown>(object: I): _825.Request;
        };
        RequestEcho: {
            encode(message: _825.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.RequestEcho;
            fromJSON(object: any): _825.RequestEcho;
            toJSON(message: _825.RequestEcho): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _825.RequestEcho;
        };
        RequestFlush: {
            encode(_: _825.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.RequestFlush;
            fromJSON(_: any): _825.RequestFlush;
            toJSON(_: _825.RequestFlush): unknown;
            fromPartial<I_2 extends unknown>(_: I_2): _825.RequestFlush;
        };
        RequestInfo: {
            encode(message: _825.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.RequestInfo;
            fromJSON(object: any): _825.RequestInfo;
            toJSON(message: _825.RequestInfo): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _825.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _825.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.RequestSetOption;
            fromJSON(object: any): _825.RequestSetOption;
            toJSON(message: _825.RequestSetOption): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _825.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _825.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.RequestInitChain;
            fromJSON(object: any): _825.RequestInitChain;
            toJSON(message: _825.RequestInitChain): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _825.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _825.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.RequestQuery;
            fromJSON(object: any): _825.RequestQuery;
            toJSON(message: _825.RequestQuery): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _825.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _825.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.RequestBeginBlock;
            fromJSON(object: any): _825.RequestBeginBlock;
            toJSON(message: _825.RequestBeginBlock): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _825.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _825.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.RequestCheckTx;
            fromJSON(object: any): _825.RequestCheckTx;
            toJSON(message: _825.RequestCheckTx): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _825.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _825.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.RequestDeliverTx;
            fromJSON(object: any): _825.RequestDeliverTx;
            toJSON(message: _825.RequestDeliverTx): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _825.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _825.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.RequestEndBlock;
            fromJSON(object: any): _825.RequestEndBlock;
            toJSON(message: _825.RequestEndBlock): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _825.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _825.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.RequestCommit;
            fromJSON(_: any): _825.RequestCommit;
            toJSON(_: _825.RequestCommit): unknown;
            fromPartial<I_11 extends unknown>(_: I_11): _825.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _825.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.RequestListSnapshots;
            fromJSON(_: any): _825.RequestListSnapshots;
            toJSON(_: _825.RequestListSnapshots): unknown;
            fromPartial<I_12 extends unknown>(_: I_12): _825.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _825.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.RequestOfferSnapshot;
            fromJSON(object: any): _825.RequestOfferSnapshot;
            toJSON(message: _825.RequestOfferSnapshot): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _825.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _825.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.RequestLoadSnapshotChunk;
            fromJSON(object: any): _825.RequestLoadSnapshotChunk;
            toJSON(message: _825.RequestLoadSnapshotChunk): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _825.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _825.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.RequestApplySnapshotChunk;
            fromJSON(object: any): _825.RequestApplySnapshotChunk;
            toJSON(message: _825.RequestApplySnapshotChunk): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _825.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _825.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.Response;
            fromJSON(object: any): _825.Response;
            toJSON(message: _825.Response): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _825.Response;
        };
        ResponseException: {
            encode(message: _825.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.ResponseException;
            fromJSON(object: any): _825.ResponseException;
            toJSON(message: _825.ResponseException): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _825.ResponseException;
        };
        ResponseEcho: {
            encode(message: _825.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.ResponseEcho;
            fromJSON(object: any): _825.ResponseEcho;
            toJSON(message: _825.ResponseEcho): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _825.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _825.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.ResponseFlush;
            fromJSON(_: any): _825.ResponseFlush;
            toJSON(_: _825.ResponseFlush): unknown;
            fromPartial<I_19 extends unknown>(_: I_19): _825.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _825.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.ResponseInfo;
            fromJSON(object: any): _825.ResponseInfo;
            toJSON(message: _825.ResponseInfo): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _825.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _825.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.ResponseSetOption;
            fromJSON(object: any): _825.ResponseSetOption;
            toJSON(message: _825.ResponseSetOption): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _825.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _825.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.ResponseInitChain;
            fromJSON(object: any): _825.ResponseInitChain;
            toJSON(message: _825.ResponseInitChain): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _825.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _825.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.ResponseQuery;
            fromJSON(object: any): _825.ResponseQuery;
            toJSON(message: _825.ResponseQuery): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _825.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _825.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.ResponseBeginBlock;
            fromJSON(object: any): _825.ResponseBeginBlock;
            toJSON(message: _825.ResponseBeginBlock): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _825.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _825.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.ResponseCheckTx;
            fromJSON(object: any): _825.ResponseCheckTx;
            toJSON(message: _825.ResponseCheckTx): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _825.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _825.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.ResponseDeliverTx;
            fromJSON(object: any): _825.ResponseDeliverTx;
            toJSON(message: _825.ResponseDeliverTx): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _825.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _825.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.ResponseEndBlock;
            fromJSON(object: any): _825.ResponseEndBlock;
            toJSON(message: _825.ResponseEndBlock): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _825.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _825.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.ResponseCommit;
            fromJSON(object: any): _825.ResponseCommit;
            toJSON(message: _825.ResponseCommit): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _825.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _825.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.ResponseListSnapshots;
            fromJSON(object: any): _825.ResponseListSnapshots;
            toJSON(message: _825.ResponseListSnapshots): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _825.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _825.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.ResponseOfferSnapshot;
            fromJSON(object: any): _825.ResponseOfferSnapshot;
            toJSON(message: _825.ResponseOfferSnapshot): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _825.ResponseOfferSnapshot;
        };
        ResponseOfferSnapshot_Result: typeof _825.ResponseOfferSnapshot_Result;
        ResponseLoadSnapshotChunk: {
            encode(message: _825.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _825.ResponseLoadSnapshotChunk;
            toJSON(message: _825.ResponseLoadSnapshotChunk): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _825.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _825.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.ResponseApplySnapshotChunk;
            fromJSON(object: any): _825.ResponseApplySnapshotChunk;
            toJSON(message: _825.ResponseApplySnapshotChunk): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _825.ResponseApplySnapshotChunk;
        };
        ResponseApplySnapshotChunk_Result: typeof _825.ResponseApplySnapshotChunk_Result;
        ConsensusParams: {
            encode(message: _825.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.ConsensusParams;
            fromJSON(object: any): _825.ConsensusParams;
            toJSON(message: _825.ConsensusParams): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _825.ConsensusParams;
        };
        BlockParams: {
            encode(message: _825.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.BlockParams;
            fromJSON(object: any): _825.BlockParams;
            toJSON(message: _825.BlockParams): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _825.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _825.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.LastCommitInfo;
            fromJSON(object: any): _825.LastCommitInfo;
            toJSON(message: _825.LastCommitInfo): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _825.LastCommitInfo;
        };
        Event: {
            encode(message: _825.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.Event;
            fromJSON(object: any): _825.Event;
            toJSON(message: _825.Event): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _825.Event;
        };
        EventAttribute: {
            encode(message: _825.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.EventAttribute;
            fromJSON(object: any): _825.EventAttribute;
            toJSON(message: _825.EventAttribute): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _825.EventAttribute;
        };
        TxResult: {
            encode(message: _825.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.TxResult;
            fromJSON(object: any): _825.TxResult;
            toJSON(message: _825.TxResult): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _825.TxResult;
        };
        Validator: {
            encode(message: _825.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.Validator;
            fromJSON(object: any): _825.Validator;
            toJSON(message: _825.Validator): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _825.Validator;
        };
        ValidatorUpdate: {
            encode(message: _825.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.ValidatorUpdate;
            fromJSON(object: any): _825.ValidatorUpdate;
            toJSON(message: _825.ValidatorUpdate): unknown;
            fromPartial<I_40 extends unknown>(object: I_40): _825.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _825.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.VoteInfo;
            fromJSON(object: any): _825.VoteInfo;
            toJSON(message: _825.VoteInfo): unknown;
            fromPartial<I_41 extends unknown>(object: I_41): _825.VoteInfo;
        };
        Evidence: {
            encode(message: _825.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.Evidence;
            fromJSON(object: any): _825.Evidence;
            toJSON(message: _825.Evidence): unknown;
            fromPartial<I_42 extends unknown>(object: I_42): _825.Evidence;
        };
        Snapshot: {
            encode(message: _825.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _825.Snapshot;
            fromJSON(object: any): _825.Snapshot;
            toJSON(message: _825.Snapshot): unknown;
            fromPartial<I_43 extends unknown>(object: I_43): _825.Snapshot;
        };
        ABCIApplicationClientImpl: typeof _825.ABCIApplicationClientImpl;
    };
    const crypto: {
        Proof: {
            encode(message: _827.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _827.Proof;
            fromJSON(object: any): _827.Proof;
            toJSON(message: _827.Proof): unknown;
            fromPartial<I extends unknown>(object: I): _827.Proof;
        };
        ValueOp: {
            encode(message: _827.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _827.ValueOp;
            fromJSON(object: any): _827.ValueOp;
            toJSON(message: _827.ValueOp): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _827.ValueOp;
        };
        DominoOp: {
            encode(message: _827.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _827.DominoOp;
            fromJSON(object: any): _827.DominoOp;
            toJSON(message: _827.DominoOp): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _827.DominoOp;
        };
        ProofOp: {
            encode(message: _827.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _827.ProofOp;
            fromJSON(object: any): _827.ProofOp;
            toJSON(message: _827.ProofOp): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _827.ProofOp;
        };
        ProofOps: {
            encode(message: _827.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _827.ProofOps;
            fromJSON(object: any): _827.ProofOps;
            toJSON(message: _827.ProofOps): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _827.ProofOps;
        };
        PublicKey: {
            encode(message: _826.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _826.PublicKey;
            fromJSON(object: any): _826.PublicKey;
            toJSON(message: _826.PublicKey): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _826.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _828.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _828.BitArray;
                fromJSON(object: any): _828.BitArray;
                toJSON(message: _828.BitArray): unknown;
                fromPartial<I extends unknown>(object: I): _828.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _829.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _829.ProtocolVersion;
            fromJSON(object: any): _829.ProtocolVersion;
            toJSON(message: _829.ProtocolVersion): unknown;
            fromPartial<I extends unknown>(object: I): _829.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _829.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _829.NodeInfo;
            fromJSON(object: any): _829.NodeInfo;
            toJSON(message: _829.NodeInfo): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _829.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _829.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _829.NodeInfoOther;
            fromJSON(object: any): _829.NodeInfoOther;
            toJSON(message: _829.NodeInfoOther): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _829.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _829.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _829.PeerInfo;
            fromJSON(object: any): _829.PeerInfo;
            toJSON(message: _829.PeerInfo): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _829.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _829.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _829.PeerAddressInfo;
            fromJSON(object: any): _829.PeerAddressInfo;
            toJSON(message: _829.PeerAddressInfo): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _829.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _834.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _834.ValidatorSet;
            fromJSON(object: any): _834.ValidatorSet;
            toJSON(message: _834.ValidatorSet): unknown;
            fromPartial<I extends unknown>(object: I): _834.ValidatorSet;
        };
        Validator: {
            encode(message: _834.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _834.Validator;
            fromJSON(object: any): _834.Validator;
            toJSON(message: _834.Validator): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _834.Validator;
        };
        SimpleValidator: {
            encode(message: _834.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _834.SimpleValidator;
            fromJSON(object: any): _834.SimpleValidator;
            toJSON(message: _834.SimpleValidator): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _834.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _833.BlockIDFlag;
        blockIDFlagToJSON(object: _833.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _833.SignedMsgType;
        signedMsgTypeToJSON(object: _833.SignedMsgType): string;
        BlockIDFlag: typeof _833.BlockIDFlag;
        SignedMsgType: typeof _833.SignedMsgType;
        PartSetHeader: {
            encode(message: _833.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _833.PartSetHeader;
            fromJSON(object: any): _833.PartSetHeader;
            toJSON(message: _833.PartSetHeader): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _833.PartSetHeader;
        };
        Part: {
            encode(message: _833.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _833.Part;
            fromJSON(object: any): _833.Part;
            toJSON(message: _833.Part): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _833.Part;
        };
        BlockID: {
            encode(message: _833.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _833.BlockID;
            fromJSON(object: any): _833.BlockID;
            toJSON(message: _833.BlockID): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _833.BlockID;
        };
        Header: {
            encode(message: _833.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _833.Header;
            fromJSON(object: any): _833.Header;
            toJSON(message: _833.Header): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _833.Header;
        };
        Data: {
            encode(message: _833.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _833.Data;
            fromJSON(object: any): _833.Data;
            toJSON(message: _833.Data): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _833.Data;
        };
        Vote: {
            encode(message: _833.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _833.Vote;
            fromJSON(object: any): _833.Vote;
            toJSON(message: _833.Vote): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _833.Vote;
        };
        Commit: {
            encode(message: _833.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _833.Commit;
            fromJSON(object: any): _833.Commit;
            toJSON(message: _833.Commit): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _833.Commit;
        };
        CommitSig: {
            encode(message: _833.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _833.CommitSig;
            fromJSON(object: any): _833.CommitSig;
            toJSON(message: _833.CommitSig): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _833.CommitSig;
        };
        Proposal: {
            encode(message: _833.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _833.Proposal;
            fromJSON(object: any): _833.Proposal;
            toJSON(message: _833.Proposal): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _833.Proposal;
        };
        SignedHeader: {
            encode(message: _833.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _833.SignedHeader;
            fromJSON(object: any): _833.SignedHeader;
            toJSON(message: _833.SignedHeader): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _833.SignedHeader;
        };
        LightBlock: {
            encode(message: _833.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _833.LightBlock;
            fromJSON(object: any): _833.LightBlock;
            toJSON(message: _833.LightBlock): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _833.LightBlock;
        };
        BlockMeta: {
            encode(message: _833.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _833.BlockMeta;
            fromJSON(object: any): _833.BlockMeta;
            toJSON(message: _833.BlockMeta): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _833.BlockMeta;
        };
        TxProof: {
            encode(message: _833.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _833.TxProof;
            fromJSON(object: any): _833.TxProof;
            toJSON(message: _833.TxProof): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _833.TxProof;
        };
        ConsensusParams: {
            encode(message: _832.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _832.ConsensusParams;
            fromJSON(object: any): _832.ConsensusParams;
            toJSON(message: _832.ConsensusParams): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _832.ConsensusParams;
        };
        BlockParams: {
            encode(message: _832.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _832.BlockParams;
            fromJSON(object: any): _832.BlockParams;
            toJSON(message: _832.BlockParams): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _832.BlockParams;
        };
        EvidenceParams: {
            encode(message: _832.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _832.EvidenceParams;
            fromJSON(object: any): _832.EvidenceParams;
            toJSON(message: _832.EvidenceParams): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _832.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _832.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _832.ValidatorParams;
            fromJSON(object: any): _832.ValidatorParams;
            toJSON(message: _832.ValidatorParams): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _832.ValidatorParams;
        };
        VersionParams: {
            encode(message: _832.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _832.VersionParams;
            fromJSON(object: any): _832.VersionParams;
            toJSON(message: _832.VersionParams): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _832.VersionParams;
        };
        HashedParams: {
            encode(message: _832.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _832.HashedParams;
            fromJSON(object: any): _832.HashedParams;
            toJSON(message: _832.HashedParams): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _832.HashedParams;
        };
        Evidence: {
            encode(message: _831.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _831.Evidence;
            fromJSON(object: any): _831.Evidence;
            toJSON(message: _831.Evidence): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _831.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _831.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _831.DuplicateVoteEvidence;
            fromJSON(object: any): _831.DuplicateVoteEvidence;
            toJSON(message: _831.DuplicateVoteEvidence): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _831.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _831.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _831.LightClientAttackEvidence;
            fromJSON(object: any): _831.LightClientAttackEvidence;
            toJSON(message: _831.LightClientAttackEvidence): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _831.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _831.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _831.EvidenceList;
            fromJSON(object: any): _831.EvidenceList;
            toJSON(message: _831.EvidenceList): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _831.EvidenceList;
        };
        Block: {
            encode(message: _830.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _830.Block;
            fromJSON(object: any): _830.Block;
            toJSON(message: _830.Block): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _830.Block;
        };
    };
    const version: {
        App: {
            encode(message: _835.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _835.App;
            fromJSON(object: any): _835.App;
            toJSON(message: _835.App): unknown;
            fromPartial<I extends unknown>(object: I): _835.App;
        };
        Consensus: {
            encode(message: _835.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _835.Consensus;
            fromJSON(object: any): _835.Consensus;
            toJSON(message: _835.Consensus): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _835.Consensus;
        };
    };
}
