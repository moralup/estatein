import { Configuration } from 'webpack';
import { BuildOptionsI } from './types';

export const buildResolvers = ({
    paths,
}: BuildOptionsI): Configuration['resolve'] => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [paths.src, 'node_modules'],
        preferAbsolute: true,
        alias: {},
    };
};
