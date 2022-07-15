import { TelescopeOptions, TelescopeOption } from '@osmonauts/types';

const getAllPackageParts = (name: string, list?: string[]) => {
    if (!list) list = [name];
    const newParts = name.split('.');
    newParts.pop();
    if (!newParts.length) return [...list];
    const newName = newParts.join('.');
    return getAllPackageParts(newName, [...list, newName]);
};

export const getPluginValue = (optionName: TelescopeOption, currentPkg: string, options: TelescopeOptions) => {
    const pkgOpts = options.packages;
    let value;
    getAllPackageParts(currentPkg).some((pkg, i) => {
        if (pkgOpts.hasOwnProperty(pkg)) {
            if (pkgOpts[pkg].hasOwnProperty(optionName)) {
                value = pkgOpts[pkg][optionName];
                return true;
            }
        }
    });

    if (value === undefined) {
        const defaultValue = options.hasOwnProperty(optionName) ? options[optionName] : undefined;
        value = defaultValue;
    }
    return value;
};
