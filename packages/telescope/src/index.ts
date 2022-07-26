import { TelescopeInput } from './types';
import { TelescopeBuilder } from './builder';

export * from './builder';
export * from './bundler';
export * from './types';

export default (input: TelescopeInput) => {
    const builder = new TelescopeBuilder(input);
    builder.build();
};

