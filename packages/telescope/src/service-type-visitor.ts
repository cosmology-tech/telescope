const detectServiceType = (fileParser) => ({
  ClassProperty(path) {
    const node = path.node;
    if (node?.key?.name === 'rpc') {
      if (node?.typeAnnotation?.typeAnnotation?.typeName?.name === 'Rpc') {
        if (path.parentPath.node.type === 'ClassBody') {
          if (path.parentPath.parentPath.node.type === 'ClassDeclaration') {
            // TODO use the protobuf instead of TS, since things like BalancerMsg from gamm will be query...
            if (path.parentPath.parentPath.node?.id?.name === 'MsgClientImpl') {
              fileParser._isMutation = true;
            } else {
              fileParser._isQuery = true;
            }
          }
        }
      }
    }
  }
});

export { detectServiceType };
