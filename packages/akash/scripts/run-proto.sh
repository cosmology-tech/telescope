#!/bin/bash

PROTO_PATH=./proto
OUT_DIR=./out/proto

FILES=`find proto -type f -name "*.proto"`

mkdir -p ${OUT_DIR}

    # --plugin="${HOME}/code/proto/ts-proto/protoc-gen-ts_proto" \

protoc \
    --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
    --ts_proto_out="${OUT_DIR}" \
    --proto_path="${PROTO_PATH}" \
    --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals='messages',outputClientImpl=true" \
    ${FILES}
