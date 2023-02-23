import { GenericParseContext } from '../../encoding';
import { buildExportCreators } from '../../utils';

const CREATOR_NAME = 'createRpcQueryStores';

export const createMobxQueryFactory = (context: GenericParseContext, obj: object) => {
    return buildExportCreators(
        context,
        obj,
        CREATOR_NAME,
        ['ProtobufRpcClient'],
        CREATOR_NAME
    );
};
