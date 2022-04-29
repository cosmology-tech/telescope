import * as t from '@babel/types';

export const fromJsonTypes = {

    // message.sender = reader.string();
    string() {

    },

    // message.poolId = (reader.uint64() as Long);
    Long() {

    },

    // message.signDoc = SignDocDirectAux.decode(reader, reader.uint32());
    Type(name: string) {

    },

    // message.mode = (reader.int32() as any);
    Enum() {

    },

    bytes() {

    }

};


