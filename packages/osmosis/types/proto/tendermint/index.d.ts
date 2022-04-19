import * as _1190 from "./abci/types";
import * as _1192 from "./crypto/keys";
import * as _1194 from "./crypto/proof";
import * as _1196 from "./libs/bits/types";
import * as _1198 from "./p2p/types";
import * as _1200 from "./types/block";
import * as _1202 from "./types/evidence";
import * as _1204 from "./types/params";
import * as _1206 from "./types/types";
import * as _1208 from "./types/validator";
import * as _1210 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _1190.CheckTxType;
        checkTxTypeToJSON(object: _1190.CheckTxType): string;
        evidenceTypeFromJSON(object: any): _1190.EvidenceType;
        evidenceTypeToJSON(object: _1190.EvidenceType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _1190.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _1190.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _1190.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _1190.ResponseApplySnapshotChunk_Result): string;
        CheckTxType: typeof _1190.CheckTxType;
        EvidenceType: typeof _1190.EvidenceType;
        Request: {
            encode(message: _1190.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.Request;
            fromJSON(object: any): _1190.Request;
            toJSON(message: _1190.Request): unknown;
            fromPartial<I extends unknown>(object: I): _1190.Request;
        };
        RequestEcho: {
            encode(message: _1190.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestEcho;
            fromJSON(object: any): _1190.RequestEcho;
            toJSON(message: _1190.RequestEcho): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _1190.RequestEcho;
        };
        RequestFlush: {
            encode(_: _1190.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestFlush;
            fromJSON(_: any): _1190.RequestFlush;
            toJSON(_: _1190.RequestFlush): unknown;
            fromPartial<I_2 extends unknown>(_: I_2): _1190.RequestFlush;
        };
        RequestInfo: {
            encode(message: _1190.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestInfo;
            fromJSON(object: any): _1190.RequestInfo;
            toJSON(message: _1190.RequestInfo): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _1190.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _1190.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestSetOption;
            fromJSON(object: any): _1190.RequestSetOption;
            toJSON(message: _1190.RequestSetOption): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _1190.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _1190.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestInitChain;
            fromJSON(object: any): _1190.RequestInitChain;
            toJSON(message: _1190.RequestInitChain): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _1190.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _1190.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestQuery;
            fromJSON(object: any): _1190.RequestQuery;
            toJSON(message: _1190.RequestQuery): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _1190.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _1190.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestBeginBlock;
            fromJSON(object: any): _1190.RequestBeginBlock;
            toJSON(message: _1190.RequestBeginBlock): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _1190.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _1190.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestCheckTx;
            fromJSON(object: any): _1190.RequestCheckTx;
            toJSON(message: _1190.RequestCheckTx): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _1190.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _1190.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestDeliverTx;
            fromJSON(object: any): _1190.RequestDeliverTx;
            toJSON(message: _1190.RequestDeliverTx): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _1190.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _1190.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestEndBlock;
            fromJSON(object: any): _1190.RequestEndBlock;
            toJSON(message: _1190.RequestEndBlock): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _1190.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _1190.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestCommit;
            fromJSON(_: any): _1190.RequestCommit;
            toJSON(_: _1190.RequestCommit): unknown;
            fromPartial<I_11 extends unknown>(_: I_11): _1190.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _1190.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestListSnapshots;
            fromJSON(_: any): _1190.RequestListSnapshots;
            toJSON(_: _1190.RequestListSnapshots): unknown;
            fromPartial<I_12 extends unknown>(_: I_12): _1190.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _1190.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestOfferSnapshot;
            fromJSON(object: any): _1190.RequestOfferSnapshot;
            toJSON(message: _1190.RequestOfferSnapshot): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _1190.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _1190.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestLoadSnapshotChunk;
            fromJSON(object: any): _1190.RequestLoadSnapshotChunk;
            toJSON(message: _1190.RequestLoadSnapshotChunk): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _1190.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _1190.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.RequestApplySnapshotChunk;
            fromJSON(object: any): _1190.RequestApplySnapshotChunk;
            toJSON(message: _1190.RequestApplySnapshotChunk): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _1190.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _1190.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.Response;
            fromJSON(object: any): _1190.Response;
            toJSON(message: _1190.Response): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _1190.Response;
        };
        ResponseException: {
            encode(message: _1190.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseException;
            fromJSON(object: any): _1190.ResponseException;
            toJSON(message: _1190.ResponseException): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _1190.ResponseException;
        };
        ResponseEcho: {
            encode(message: _1190.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseEcho;
            fromJSON(object: any): _1190.ResponseEcho;
            toJSON(message: _1190.ResponseEcho): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _1190.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _1190.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseFlush;
            fromJSON(_: any): _1190.ResponseFlush;
            toJSON(_: _1190.ResponseFlush): unknown;
            fromPartial<I_19 extends unknown>(_: I_19): _1190.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _1190.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseInfo;
            fromJSON(object: any): _1190.ResponseInfo;
            toJSON(message: _1190.ResponseInfo): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _1190.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _1190.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseSetOption;
            fromJSON(object: any): _1190.ResponseSetOption;
            toJSON(message: _1190.ResponseSetOption): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _1190.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _1190.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseInitChain;
            fromJSON(object: any): _1190.ResponseInitChain;
            toJSON(message: _1190.ResponseInitChain): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _1190.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _1190.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseQuery;
            fromJSON(object: any): _1190.ResponseQuery;
            toJSON(message: _1190.ResponseQuery): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _1190.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _1190.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseBeginBlock;
            fromJSON(object: any): _1190.ResponseBeginBlock;
            toJSON(message: _1190.ResponseBeginBlock): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _1190.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _1190.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseCheckTx;
            fromJSON(object: any): _1190.ResponseCheckTx;
            toJSON(message: _1190.ResponseCheckTx): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _1190.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _1190.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseDeliverTx;
            fromJSON(object: any): _1190.ResponseDeliverTx;
            toJSON(message: _1190.ResponseDeliverTx): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _1190.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _1190.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseEndBlock;
            fromJSON(object: any): _1190.ResponseEndBlock;
            toJSON(message: _1190.ResponseEndBlock): unknown;
            fromPartial<I_27 extends unknown>(object: I_27): _1190.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _1190.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseCommit;
            fromJSON(object: any): _1190.ResponseCommit;
            toJSON(message: _1190.ResponseCommit): unknown;
            fromPartial<I_28 extends unknown>(object: I_28): _1190.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _1190.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseListSnapshots;
            fromJSON(object: any): _1190.ResponseListSnapshots;
            toJSON(message: _1190.ResponseListSnapshots): unknown;
            fromPartial<I_29 extends unknown>(object: I_29): _1190.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _1190.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseOfferSnapshot;
            fromJSON(object: any): _1190.ResponseOfferSnapshot;
            toJSON(message: _1190.ResponseOfferSnapshot): unknown;
            fromPartial<I_30 extends unknown>(object: I_30): _1190.ResponseOfferSnapshot;
        };
        ResponseOfferSnapshot_Result: typeof _1190.ResponseOfferSnapshot_Result;
        ResponseLoadSnapshotChunk: {
            encode(message: _1190.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _1190.ResponseLoadSnapshotChunk;
            toJSON(message: _1190.ResponseLoadSnapshotChunk): unknown;
            fromPartial<I_31 extends unknown>(object: I_31): _1190.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _1190.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ResponseApplySnapshotChunk;
            fromJSON(object: any): _1190.ResponseApplySnapshotChunk;
            toJSON(message: _1190.ResponseApplySnapshotChunk): unknown;
            fromPartial<I_32 extends unknown>(object: I_32): _1190.ResponseApplySnapshotChunk;
        };
        ResponseApplySnapshotChunk_Result: typeof _1190.ResponseApplySnapshotChunk_Result;
        ConsensusParams: {
            encode(message: _1190.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ConsensusParams;
            fromJSON(object: any): _1190.ConsensusParams;
            toJSON(message: _1190.ConsensusParams): unknown;
            fromPartial<I_33 extends unknown>(object: I_33): _1190.ConsensusParams;
        };
        BlockParams: {
            encode(message: _1190.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.BlockParams;
            fromJSON(object: any): _1190.BlockParams;
            toJSON(message: _1190.BlockParams): unknown;
            fromPartial<I_34 extends unknown>(object: I_34): _1190.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _1190.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.LastCommitInfo;
            fromJSON(object: any): _1190.LastCommitInfo;
            toJSON(message: _1190.LastCommitInfo): unknown;
            fromPartial<I_35 extends unknown>(object: I_35): _1190.LastCommitInfo;
        };
        Event: {
            encode(message: _1190.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.Event;
            fromJSON(object: any): _1190.Event;
            toJSON(message: _1190.Event): unknown;
            fromPartial<I_36 extends unknown>(object: I_36): _1190.Event;
        };
        EventAttribute: {
            encode(message: _1190.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.EventAttribute;
            fromJSON(object: any): _1190.EventAttribute;
            toJSON(message: _1190.EventAttribute): unknown;
            fromPartial<I_37 extends unknown>(object: I_37): _1190.EventAttribute;
        };
        TxResult: {
            encode(message: _1190.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.TxResult;
            fromJSON(object: any): _1190.TxResult;
            toJSON(message: _1190.TxResult): unknown;
            fromPartial<I_38 extends unknown>(object: I_38): _1190.TxResult;
        };
        Validator: {
            encode(message: _1190.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.Validator;
            fromJSON(object: any): _1190.Validator;
            toJSON(message: _1190.Validator): unknown;
            fromPartial<I_39 extends unknown>(object: I_39): _1190.Validator;
        };
        ValidatorUpdate: {
            encode(message: _1190.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.ValidatorUpdate;
            fromJSON(object: any): _1190.ValidatorUpdate;
            toJSON(message: _1190.ValidatorUpdate): unknown;
            fromPartial<I_40 extends unknown>(object: I_40): _1190.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _1190.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.VoteInfo;
            fromJSON(object: any): _1190.VoteInfo;
            toJSON(message: _1190.VoteInfo): unknown;
            fromPartial<I_41 extends unknown>(object: I_41): _1190.VoteInfo;
        };
        Evidence: {
            encode(message: _1190.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.Evidence;
            fromJSON(object: any): _1190.Evidence;
            toJSON(message: _1190.Evidence): unknown;
            fromPartial<I_42 extends unknown>(object: I_42): _1190.Evidence;
        };
        Snapshot: {
            encode(message: _1190.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1190.Snapshot;
            fromJSON(object: any): _1190.Snapshot;
            toJSON(message: _1190.Snapshot): unknown;
            fromPartial<I_43 extends unknown>(object: I_43): _1190.Snapshot;
        };
        ABCIApplicationClientImpl: typeof _1190.ABCIApplicationClientImpl;
    };
    const crypto: {
        Proof: {
            encode(message: _1194.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1194.Proof;
            fromJSON(object: any): _1194.Proof;
            toJSON(message: _1194.Proof): unknown;
            fromPartial<I extends unknown>(object: I): _1194.Proof;
        };
        ValueOp: {
            encode(message: _1194.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1194.ValueOp;
            fromJSON(object: any): _1194.ValueOp;
            toJSON(message: _1194.ValueOp): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _1194.ValueOp;
        };
        DominoOp: {
            encode(message: _1194.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1194.DominoOp;
            fromJSON(object: any): _1194.DominoOp;
            toJSON(message: _1194.DominoOp): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _1194.DominoOp;
        };
        ProofOp: {
            encode(message: _1194.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1194.ProofOp;
            fromJSON(object: any): _1194.ProofOp;
            toJSON(message: _1194.ProofOp): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _1194.ProofOp;
        };
        ProofOps: {
            encode(message: _1194.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1194.ProofOps;
            fromJSON(object: any): _1194.ProofOps;
            toJSON(message: _1194.ProofOps): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _1194.ProofOps;
        };
        PublicKey: {
            encode(message: _1192.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1192.PublicKey;
            fromJSON(object: any): _1192.PublicKey;
            toJSON(message: _1192.PublicKey): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _1192.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _1196.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1196.BitArray;
                fromJSON(object: any): _1196.BitArray;
                toJSON(message: _1196.BitArray): unknown;
                fromPartial<I extends unknown>(object: I): _1196.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _1198.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1198.ProtocolVersion;
            fromJSON(object: any): _1198.ProtocolVersion;
            toJSON(message: _1198.ProtocolVersion): unknown;
            fromPartial<I extends unknown>(object: I): _1198.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _1198.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1198.NodeInfo;
            fromJSON(object: any): _1198.NodeInfo;
            toJSON(message: _1198.NodeInfo): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _1198.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _1198.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1198.NodeInfoOther;
            fromJSON(object: any): _1198.NodeInfoOther;
            toJSON(message: _1198.NodeInfoOther): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _1198.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _1198.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1198.PeerInfo;
            fromJSON(object: any): _1198.PeerInfo;
            toJSON(message: _1198.PeerInfo): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _1198.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _1198.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1198.PeerAddressInfo;
            fromJSON(object: any): _1198.PeerAddressInfo;
            toJSON(message: _1198.PeerAddressInfo): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _1198.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _1208.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1208.ValidatorSet;
            fromJSON(object: any): _1208.ValidatorSet;
            toJSON(message: _1208.ValidatorSet): unknown;
            fromPartial<I extends unknown>(object: I): _1208.ValidatorSet;
        };
        Validator: {
            encode(message: _1208.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1208.Validator;
            fromJSON(object: any): _1208.Validator;
            toJSON(message: _1208.Validator): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _1208.Validator;
        };
        SimpleValidator: {
            encode(message: _1208.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1208.SimpleValidator;
            fromJSON(object: any): _1208.SimpleValidator;
            toJSON(message: _1208.SimpleValidator): unknown;
            fromPartial<I_2 extends unknown>(object: I_2): _1208.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _1206.BlockIDFlag;
        blockIDFlagToJSON(object: _1206.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _1206.SignedMsgType;
        signedMsgTypeToJSON(object: _1206.SignedMsgType): string;
        BlockIDFlag: typeof _1206.BlockIDFlag;
        SignedMsgType: typeof _1206.SignedMsgType;
        PartSetHeader: {
            encode(message: _1206.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.PartSetHeader;
            fromJSON(object: any): _1206.PartSetHeader;
            toJSON(message: _1206.PartSetHeader): unknown;
            fromPartial<I_3 extends unknown>(object: I_3): _1206.PartSetHeader;
        };
        Part: {
            encode(message: _1206.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.Part;
            fromJSON(object: any): _1206.Part;
            toJSON(message: _1206.Part): unknown;
            fromPartial<I_4 extends unknown>(object: I_4): _1206.Part;
        };
        BlockID: {
            encode(message: _1206.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.BlockID;
            fromJSON(object: any): _1206.BlockID;
            toJSON(message: _1206.BlockID): unknown;
            fromPartial<I_5 extends unknown>(object: I_5): _1206.BlockID;
        };
        Header: {
            encode(message: _1206.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.Header;
            fromJSON(object: any): _1206.Header;
            toJSON(message: _1206.Header): unknown;
            fromPartial<I_6 extends unknown>(object: I_6): _1206.Header;
        };
        Data: {
            encode(message: _1206.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.Data;
            fromJSON(object: any): _1206.Data;
            toJSON(message: _1206.Data): unknown;
            fromPartial<I_7 extends unknown>(object: I_7): _1206.Data;
        };
        Vote: {
            encode(message: _1206.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.Vote;
            fromJSON(object: any): _1206.Vote;
            toJSON(message: _1206.Vote): unknown;
            fromPartial<I_8 extends unknown>(object: I_8): _1206.Vote;
        };
        Commit: {
            encode(message: _1206.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.Commit;
            fromJSON(object: any): _1206.Commit;
            toJSON(message: _1206.Commit): unknown;
            fromPartial<I_9 extends unknown>(object: I_9): _1206.Commit;
        };
        CommitSig: {
            encode(message: _1206.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.CommitSig;
            fromJSON(object: any): _1206.CommitSig;
            toJSON(message: _1206.CommitSig): unknown;
            fromPartial<I_10 extends unknown>(object: I_10): _1206.CommitSig;
        };
        Proposal: {
            encode(message: _1206.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.Proposal;
            fromJSON(object: any): _1206.Proposal;
            toJSON(message: _1206.Proposal): unknown;
            fromPartial<I_11 extends unknown>(object: I_11): _1206.Proposal;
        };
        SignedHeader: {
            encode(message: _1206.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.SignedHeader;
            fromJSON(object: any): _1206.SignedHeader;
            toJSON(message: _1206.SignedHeader): unknown;
            fromPartial<I_12 extends unknown>(object: I_12): _1206.SignedHeader;
        };
        LightBlock: {
            encode(message: _1206.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.LightBlock;
            fromJSON(object: any): _1206.LightBlock;
            toJSON(message: _1206.LightBlock): unknown;
            fromPartial<I_13 extends unknown>(object: I_13): _1206.LightBlock;
        };
        BlockMeta: {
            encode(message: _1206.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.BlockMeta;
            fromJSON(object: any): _1206.BlockMeta;
            toJSON(message: _1206.BlockMeta): unknown;
            fromPartial<I_14 extends unknown>(object: I_14): _1206.BlockMeta;
        };
        TxProof: {
            encode(message: _1206.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1206.TxProof;
            fromJSON(object: any): _1206.TxProof;
            toJSON(message: _1206.TxProof): unknown;
            fromPartial<I_15 extends unknown>(object: I_15): _1206.TxProof;
        };
        ConsensusParams: {
            encode(message: _1204.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1204.ConsensusParams;
            fromJSON(object: any): _1204.ConsensusParams;
            toJSON(message: _1204.ConsensusParams): unknown;
            fromPartial<I_16 extends unknown>(object: I_16): _1204.ConsensusParams;
        };
        BlockParams: {
            encode(message: _1204.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1204.BlockParams;
            fromJSON(object: any): _1204.BlockParams;
            toJSON(message: _1204.BlockParams): unknown;
            fromPartial<I_17 extends unknown>(object: I_17): _1204.BlockParams;
        };
        EvidenceParams: {
            encode(message: _1204.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1204.EvidenceParams;
            fromJSON(object: any): _1204.EvidenceParams;
            toJSON(message: _1204.EvidenceParams): unknown;
            fromPartial<I_18 extends unknown>(object: I_18): _1204.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _1204.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1204.ValidatorParams;
            fromJSON(object: any): _1204.ValidatorParams;
            toJSON(message: _1204.ValidatorParams): unknown;
            fromPartial<I_19 extends unknown>(object: I_19): _1204.ValidatorParams;
        };
        VersionParams: {
            encode(message: _1204.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1204.VersionParams;
            fromJSON(object: any): _1204.VersionParams;
            toJSON(message: _1204.VersionParams): unknown;
            fromPartial<I_20 extends unknown>(object: I_20): _1204.VersionParams;
        };
        HashedParams: {
            encode(message: _1204.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1204.HashedParams;
            fromJSON(object: any): _1204.HashedParams;
            toJSON(message: _1204.HashedParams): unknown;
            fromPartial<I_21 extends unknown>(object: I_21): _1204.HashedParams;
        };
        Evidence: {
            encode(message: _1202.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1202.Evidence;
            fromJSON(object: any): _1202.Evidence;
            toJSON(message: _1202.Evidence): unknown;
            fromPartial<I_22 extends unknown>(object: I_22): _1202.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _1202.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1202.DuplicateVoteEvidence;
            fromJSON(object: any): _1202.DuplicateVoteEvidence;
            toJSON(message: _1202.DuplicateVoteEvidence): unknown;
            fromPartial<I_23 extends unknown>(object: I_23): _1202.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _1202.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1202.LightClientAttackEvidence;
            fromJSON(object: any): _1202.LightClientAttackEvidence;
            toJSON(message: _1202.LightClientAttackEvidence): unknown;
            fromPartial<I_24 extends unknown>(object: I_24): _1202.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _1202.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1202.EvidenceList;
            fromJSON(object: any): _1202.EvidenceList;
            toJSON(message: _1202.EvidenceList): unknown;
            fromPartial<I_25 extends unknown>(object: I_25): _1202.EvidenceList;
        };
        Block: {
            encode(message: _1200.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1200.Block;
            fromJSON(object: any): _1200.Block;
            toJSON(message: _1200.Block): unknown;
            fromPartial<I_26 extends unknown>(object: I_26): _1200.Block;
        };
    };
    const version: {
        App: {
            encode(message: _1210.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1210.App;
            fromJSON(object: any): _1210.App;
            toJSON(message: _1210.App): unknown;
            fromPartial<I extends unknown>(object: I): _1210.App;
        };
        Consensus: {
            encode(message: _1210.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1210.Consensus;
            fromJSON(object: any): _1210.Consensus;
            toJSON(message: _1210.Consensus): unknown;
            fromPartial<I_1 extends unknown>(object: I_1): _1210.Consensus;
        };
    };
}
