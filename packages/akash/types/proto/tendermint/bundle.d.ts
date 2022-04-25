import * as _1059 from "./abci/types";
import * as _1060 from "./crypto/keys";
import * as _1061 from "./crypto/proof";
import * as _1062 from "./libs/bits/types";
import * as _1063 from "./p2p/types";
import * as _1064 from "./types/block";
import * as _1065 from "./types/evidence";
import * as _1066 from "./types/params";
import * as _1067 from "./types/types";
import * as _1068 from "./types/validator";
import * as _1069 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _1059.CheckTxType;
        checkTxTypeToJSON(object: _1059.CheckTxType): string;
        evidenceTypeFromJSON(object: any): _1059.EvidenceType;
        evidenceTypeToJSON(object: _1059.EvidenceType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _1059.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _1059.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _1059.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _1059.ResponseApplySnapshotChunk_Result): string;
        CheckTxType: typeof _1059.CheckTxType;
        EvidenceType: typeof _1059.EvidenceType;
        Request: {
            encode(message: _1059.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.Request;
            fromJSON(object: any): _1059.Request;
            toJSON(message: _1059.Request): unknown;
            fromPartial<I extends unknown>(object: I): _1059.Request;
        };
        RequestEcho: {
            encode(message: _1059.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.RequestEcho;
            fromJSON(object: any): _1059.RequestEcho;
            toJSON(message: _1059.RequestEcho): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _1059.RequestEcho;
        };
        RequestFlush: {
            encode(_: _1059.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.RequestFlush;
            fromJSON(_: any): _1059.RequestFlush;
            toJSON(_: _1059.RequestFlush): unknown;
            fromPartial<I_2 extends unknown>(_: I_2): _1059.RequestFlush;
        };
        RequestInfo: {
            encode(message: _1059.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.RequestInfo;
            fromJSON(object: any): _1059.RequestInfo;
            toJSON(message: _1059.RequestInfo): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _1059.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _1059.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.RequestSetOption;
            fromJSON(object: any): _1059.RequestSetOption;
            toJSON(message: _1059.RequestSetOption): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _1059.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _1059.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.RequestInitChain;
            fromJSON(object: any): _1059.RequestInitChain;
            toJSON(message: _1059.RequestInitChain): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _1059.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _1059.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.RequestQuery;
            fromJSON(object: any): _1059.RequestQuery;
            toJSON(message: _1059.RequestQuery): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _1059.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _1059.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.RequestBeginBlock;
            fromJSON(object: any): _1059.RequestBeginBlock;
            toJSON(message: _1059.RequestBeginBlock): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _1059.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _1059.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.RequestCheckTx;
            fromJSON(object: any): _1059.RequestCheckTx;
            toJSON(message: _1059.RequestCheckTx): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _1059.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _1059.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.RequestDeliverTx;
            fromJSON(object: any): _1059.RequestDeliverTx;
            toJSON(message: _1059.RequestDeliverTx): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _1059.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _1059.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.RequestEndBlock;
            fromJSON(object: any): _1059.RequestEndBlock;
            toJSON(message: _1059.RequestEndBlock): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _1059.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _1059.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.RequestCommit;
            fromJSON(_: any): _1059.RequestCommit;
            toJSON(_: _1059.RequestCommit): unknown;
            fromPartial<I_11 extends unknown>(_: I_11): _1059.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _1059.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.RequestListSnapshots;
            fromJSON(_: any): _1059.RequestListSnapshots;
            toJSON(_: _1059.RequestListSnapshots): unknown;
            fromPartial<I_12 extends unknown>(_: I_12): _1059.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _1059.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.RequestOfferSnapshot;
            fromJSON(object: any): _1059.RequestOfferSnapshot;
            toJSON(message: _1059.RequestOfferSnapshot): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _1059.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _1059.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.RequestLoadSnapshotChunk;
            fromJSON(object: any): _1059.RequestLoadSnapshotChunk;
            toJSON(message: _1059.RequestLoadSnapshotChunk): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _1059.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _1059.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.RequestApplySnapshotChunk;
            fromJSON(object: any): _1059.RequestApplySnapshotChunk;
            toJSON(message: _1059.RequestApplySnapshotChunk): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _1059.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _1059.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.Response;
            fromJSON(object: any): _1059.Response;
            toJSON(message: _1059.Response): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _1059.Response;
        };
        ResponseException: {
            encode(message: _1059.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.ResponseException;
            fromJSON(object: any): _1059.ResponseException;
            toJSON(message: _1059.ResponseException): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _1059.ResponseException;
        };
        ResponseEcho: {
            encode(message: _1059.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.ResponseEcho;
            fromJSON(object: any): _1059.ResponseEcho;
            toJSON(message: _1059.ResponseEcho): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _1059.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _1059.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.ResponseFlush;
            fromJSON(_: any): _1059.ResponseFlush;
            toJSON(_: _1059.ResponseFlush): unknown;
            fromPartial<I_19 extends unknown>(_: I_19): _1059.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _1059.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.ResponseInfo;
            fromJSON(object: any): _1059.ResponseInfo;
            toJSON(message: _1059.ResponseInfo): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _1059.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _1059.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.ResponseSetOption;
            fromJSON(object: any): _1059.ResponseSetOption;
            toJSON(message: _1059.ResponseSetOption): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _1059.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _1059.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.ResponseInitChain;
            fromJSON(object: any): _1059.ResponseInitChain;
            toJSON(message: _1059.ResponseInitChain): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _1059.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _1059.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.ResponseQuery;
            fromJSON(object: any): _1059.ResponseQuery;
            toJSON(message: _1059.ResponseQuery): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _1059.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _1059.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.ResponseBeginBlock;
            fromJSON(object: any): _1059.ResponseBeginBlock;
            toJSON(message: _1059.ResponseBeginBlock): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _1059.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _1059.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.ResponseCheckTx;
            fromJSON(object: any): _1059.ResponseCheckTx;
            toJSON(message: _1059.ResponseCheckTx): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _1059.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _1059.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.ResponseDeliverTx;
            fromJSON(object: any): _1059.ResponseDeliverTx;
            toJSON(message: _1059.ResponseDeliverTx): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _1059.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _1059.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.ResponseEndBlock;
            fromJSON(object: any): _1059.ResponseEndBlock;
            toJSON(message: _1059.ResponseEndBlock): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _1059.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _1059.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.ResponseCommit;
            fromJSON(object: any): _1059.ResponseCommit;
            toJSON(message: _1059.ResponseCommit): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _1059.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _1059.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.ResponseListSnapshots;
            fromJSON(object: any): _1059.ResponseListSnapshots;
            toJSON(message: _1059.ResponseListSnapshots): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _1059.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _1059.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.ResponseOfferSnapshot;
            fromJSON(object: any): _1059.ResponseOfferSnapshot;
            toJSON(message: _1059.ResponseOfferSnapshot): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _1059.ResponseOfferSnapshot;
        };
        ResponseOfferSnapshot_Result: typeof _1059.ResponseOfferSnapshot_Result;
        ResponseLoadSnapshotChunk: {
            encode(message: _1059.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _1059.ResponseLoadSnapshotChunk;
            toJSON(message: _1059.ResponseLoadSnapshotChunk): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _1059.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _1059.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.ResponseApplySnapshotChunk;
            fromJSON(object: any): _1059.ResponseApplySnapshotChunk;
            toJSON(message: _1059.ResponseApplySnapshotChunk): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _1059.ResponseApplySnapshotChunk;
        };
        ResponseApplySnapshotChunk_Result: typeof _1059.ResponseApplySnapshotChunk_Result;
        ConsensusParams: {
            encode(message: _1059.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.ConsensusParams;
            fromJSON(object: any): _1059.ConsensusParams;
            toJSON(message: _1059.ConsensusParams): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _1059.ConsensusParams;
        };
        BlockParams: {
            encode(message: _1059.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.BlockParams;
            fromJSON(object: any): _1059.BlockParams;
            toJSON(message: _1059.BlockParams): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _1059.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _1059.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.LastCommitInfo;
            fromJSON(object: any): _1059.LastCommitInfo;
            toJSON(message: _1059.LastCommitInfo): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _1059.LastCommitInfo;
        };
        Event: {
            encode(message: _1059.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.Event;
            fromJSON(object: any): _1059.Event;
            toJSON(message: _1059.Event): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _1059.Event;
        };
        EventAttribute: {
            encode(message: _1059.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.EventAttribute;
            fromJSON(object: any): _1059.EventAttribute;
            toJSON(message: _1059.EventAttribute): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _1059.EventAttribute;
        };
        TxResult: {
            encode(message: _1059.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.TxResult;
            fromJSON(object: any): _1059.TxResult;
            toJSON(message: _1059.TxResult): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _1059.TxResult;
        };
        Validator: {
            encode(message: _1059.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.Validator;
            fromJSON(object: any): _1059.Validator;
            toJSON(message: _1059.Validator): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _1059.Validator;
        };
        ValidatorUpdate: {
            encode(message: _1059.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.ValidatorUpdate;
            fromJSON(object: any): _1059.ValidatorUpdate;
            toJSON(message: _1059.ValidatorUpdate): unknown;
            fromPartial<I_40 extends unknown>(object: I_40): _1059.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _1059.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.VoteInfo;
            fromJSON(object: any): _1059.VoteInfo;
            toJSON(message: _1059.VoteInfo): unknown;
            fromPartial<I_41 extends unknown>(object: I_41): _1059.VoteInfo;
        };
        Evidence: {
            encode(message: _1059.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.Evidence;
            fromJSON(object: any): _1059.Evidence;
            toJSON(message: _1059.Evidence): unknown;
            fromPartial<I_42 extends unknown>(object: I_42): _1059.Evidence;
        };
        Snapshot: {
            encode(message: _1059.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1059.Snapshot;
            fromJSON(object: any): _1059.Snapshot;
            toJSON(message: _1059.Snapshot): unknown;
            fromPartial<I_43 extends unknown>(object: I_43): _1059.Snapshot;
        };
        ABCIApplicationClientImpl: typeof _1059.ABCIApplicationClientImpl;
    };
    const crypto: {
        Proof: {
            encode(message: _1061.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1061.Proof;
            fromJSON(object: any): _1061.Proof;
            toJSON(message: _1061.Proof): unknown;
            fromPartial<I extends unknown>(object: I): _1061.Proof;
        };
        ValueOp: {
            encode(message: _1061.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1061.ValueOp;
            fromJSON(object: any): _1061.ValueOp;
            toJSON(message: _1061.ValueOp): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _1061.ValueOp;
        };
        DominoOp: {
            encode(message: _1061.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1061.DominoOp;
            fromJSON(object: any): _1061.DominoOp;
            toJSON(message: _1061.DominoOp): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _1061.DominoOp;
        };
        ProofOp: {
            encode(message: _1061.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1061.ProofOp;
            fromJSON(object: any): _1061.ProofOp;
            toJSON(message: _1061.ProofOp): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _1061.ProofOp;
        };
        ProofOps: {
            encode(message: _1061.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1061.ProofOps;
            fromJSON(object: any): _1061.ProofOps;
            toJSON(message: _1061.ProofOps): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _1061.ProofOps;
        };
        PublicKey: {
            encode(message: _1060.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1060.PublicKey;
            fromJSON(object: any): _1060.PublicKey;
            toJSON(message: _1060.PublicKey): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _1060.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _1062.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1062.BitArray;
                fromJSON(object: any): _1062.BitArray;
                toJSON(message: _1062.BitArray): unknown;
                fromPartial<I extends unknown>(object: I): _1062.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _1063.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1063.ProtocolVersion;
            fromJSON(object: any): _1063.ProtocolVersion;
            toJSON(message: _1063.ProtocolVersion): unknown;
            fromPartial<I extends unknown>(object: I): _1063.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _1063.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1063.NodeInfo;
            fromJSON(object: any): _1063.NodeInfo;
            toJSON(message: _1063.NodeInfo): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _1063.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _1063.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1063.NodeInfoOther;
            fromJSON(object: any): _1063.NodeInfoOther;
            toJSON(message: _1063.NodeInfoOther): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _1063.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _1063.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1063.PeerInfo;
            fromJSON(object: any): _1063.PeerInfo;
            toJSON(message: _1063.PeerInfo): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _1063.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _1063.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1063.PeerAddressInfo;
            fromJSON(object: any): _1063.PeerAddressInfo;
            toJSON(message: _1063.PeerAddressInfo): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _1063.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _1068.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.ValidatorSet;
            fromJSON(object: any): _1068.ValidatorSet;
            toJSON(message: _1068.ValidatorSet): unknown;
            fromPartial<I extends unknown>(object: I): _1068.ValidatorSet;
        };
        Validator: {
            encode(message: _1068.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.Validator;
            fromJSON(object: any): _1068.Validator;
            toJSON(message: _1068.Validator): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _1068.Validator;
        };
        SimpleValidator: {
            encode(message: _1068.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1068.SimpleValidator;
            fromJSON(object: any): _1068.SimpleValidator;
            toJSON(message: _1068.SimpleValidator): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _1068.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _1067.BlockIDFlag;
        blockIDFlagToJSON(object: _1067.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _1067.SignedMsgType;
        signedMsgTypeToJSON(object: _1067.SignedMsgType): string;
        BlockIDFlag: typeof _1067.BlockIDFlag;
        SignedMsgType: typeof _1067.SignedMsgType;
        PartSetHeader: {
            encode(message: _1067.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1067.PartSetHeader;
            fromJSON(object: any): _1067.PartSetHeader;
            toJSON(message: _1067.PartSetHeader): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _1067.PartSetHeader;
        };
        Part: {
            encode(message: _1067.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1067.Part;
            fromJSON(object: any): _1067.Part;
            toJSON(message: _1067.Part): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _1067.Part;
        };
        BlockID: {
            encode(message: _1067.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1067.BlockID;
            fromJSON(object: any): _1067.BlockID;
            toJSON(message: _1067.BlockID): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _1067.BlockID;
        };
        Header: {
            encode(message: _1067.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1067.Header;
            fromJSON(object: any): _1067.Header;
            toJSON(message: _1067.Header): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _1067.Header;
        };
        Data: {
            encode(message: _1067.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1067.Data;
            fromJSON(object: any): _1067.Data;
            toJSON(message: _1067.Data): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _1067.Data;
        };
        Vote: {
            encode(message: _1067.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1067.Vote;
            fromJSON(object: any): _1067.Vote;
            toJSON(message: _1067.Vote): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _1067.Vote;
        };
        Commit: {
            encode(message: _1067.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1067.Commit;
            fromJSON(object: any): _1067.Commit;
            toJSON(message: _1067.Commit): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _1067.Commit;
        };
        CommitSig: {
            encode(message: _1067.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1067.CommitSig;
            fromJSON(object: any): _1067.CommitSig;
            toJSON(message: _1067.CommitSig): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _1067.CommitSig;
        };
        Proposal: {
            encode(message: _1067.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1067.Proposal;
            fromJSON(object: any): _1067.Proposal;
            toJSON(message: _1067.Proposal): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _1067.Proposal;
        };
        SignedHeader: {
            encode(message: _1067.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1067.SignedHeader;
            fromJSON(object: any): _1067.SignedHeader;
            toJSON(message: _1067.SignedHeader): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _1067.SignedHeader;
        };
        LightBlock: {
            encode(message: _1067.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1067.LightBlock;
            fromJSON(object: any): _1067.LightBlock;
            toJSON(message: _1067.LightBlock): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _1067.LightBlock;
        };
        BlockMeta: {
            encode(message: _1067.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1067.BlockMeta;
            fromJSON(object: any): _1067.BlockMeta;
            toJSON(message: _1067.BlockMeta): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _1067.BlockMeta;
        };
        TxProof: {
            encode(message: _1067.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1067.TxProof;
            fromJSON(object: any): _1067.TxProof;
            toJSON(message: _1067.TxProof): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _1067.TxProof;
        };
        ConsensusParams: {
            encode(message: _1066.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1066.ConsensusParams;
            fromJSON(object: any): _1066.ConsensusParams;
            toJSON(message: _1066.ConsensusParams): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _1066.ConsensusParams;
        };
        BlockParams: {
            encode(message: _1066.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1066.BlockParams;
            fromJSON(object: any): _1066.BlockParams;
            toJSON(message: _1066.BlockParams): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _1066.BlockParams;
        };
        EvidenceParams: {
            encode(message: _1066.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1066.EvidenceParams;
            fromJSON(object: any): _1066.EvidenceParams;
            toJSON(message: _1066.EvidenceParams): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _1066.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _1066.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1066.ValidatorParams;
            fromJSON(object: any): _1066.ValidatorParams;
            toJSON(message: _1066.ValidatorParams): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _1066.ValidatorParams;
        };
        VersionParams: {
            encode(message: _1066.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1066.VersionParams;
            fromJSON(object: any): _1066.VersionParams;
            toJSON(message: _1066.VersionParams): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _1066.VersionParams;
        };
        HashedParams: {
            encode(message: _1066.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1066.HashedParams;
            fromJSON(object: any): _1066.HashedParams;
            toJSON(message: _1066.HashedParams): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _1066.HashedParams;
        };
        Evidence: {
            encode(message: _1065.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1065.Evidence;
            fromJSON(object: any): _1065.Evidence;
            toJSON(message: _1065.Evidence): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _1065.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _1065.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1065.DuplicateVoteEvidence;
            fromJSON(object: any): _1065.DuplicateVoteEvidence;
            toJSON(message: _1065.DuplicateVoteEvidence): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _1065.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _1065.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1065.LightClientAttackEvidence;
            fromJSON(object: any): _1065.LightClientAttackEvidence;
            toJSON(message: _1065.LightClientAttackEvidence): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _1065.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _1065.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1065.EvidenceList;
            fromJSON(object: any): _1065.EvidenceList;
            toJSON(message: _1065.EvidenceList): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _1065.EvidenceList;
        };
        Block: {
            encode(message: _1064.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1064.Block;
            fromJSON(object: any): _1064.Block;
            toJSON(message: _1064.Block): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _1064.Block;
        };
    };
    const version: {
        App: {
            encode(message: _1069.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1069.App;
            fromJSON(object: any): _1069.App;
            toJSON(message: _1069.App): unknown;
            fromPartial<I extends unknown>(object: I): _1069.App;
        };
        Consensus: {
            encode(message: _1069.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1069.Consensus;
            fromJSON(object: any): _1069.Consensus;
            toJSON(message: _1069.Consensus): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _1069.Consensus;
        };
    };
}
