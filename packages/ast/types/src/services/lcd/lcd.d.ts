import * as t from '@babel/types';
import { ProtoService } from '@osmonauts/types';
import { GenericParseContext } from '../../encoding';
export declare const getUrlTemplateString: (url: string) => {
    strs: any[];
    atEnd: boolean;
};
export declare const makeLCDClient: (context: GenericParseContext, service: ProtoService) => t.ExportNamedDeclaration;
export declare const makeAggregatedLCDClient: (context: GenericParseContext, services: ProtoService[], clientName: string) => t.ExportNamedDeclaration;
