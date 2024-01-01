export const AminoUtils = {
    shouldOmitEmpty(field: {
        options: {
            [p: string]: any;
        };
    }): boolean
    {
        // if (field?.options?.['(gogoproto.nullable)']) {
        //     return false;
        // }
        let jsonTag = field.options?.['(gogoproto.jsontag)'] ?? field.options?.['(cosmos_proto.json_tag)'];
        return jsonTag == null || jsonTag === "" || jsonTag.includes("omitempty");
    }

}
