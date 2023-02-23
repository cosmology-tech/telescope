import { GenericParseContext } from '../../encoding';
import { buildExportCreators } from '../../utils';

const CREATOR_NAME = 'createPiniaStores';

export const createPiniaStoreFactory = (context: GenericParseContext, obj: object) => {
  return buildExportCreators(
    context,
    obj,
    CREATOR_NAME,
    ['ProtobufRpcClient'],
    'usePiniaStore'
  );
};
