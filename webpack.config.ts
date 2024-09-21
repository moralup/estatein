import path from 'path';
import type {
    BuildEnvI,
    BuildOptionsI,
    BuildPathsI,
} from './config/build/types';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnvI) => {
    const paths: BuildPathsI = {
        src: path.resolve(__dirname, 'src'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        build: path.resolve(__dirname, 'build'),
        sass: ['app/style/mixins', 'app/style/media-breakpoints'],
    };

    const mode = env.mode || 'development';
    const port = env.port || 3000;
    const isDev = mode === 'development';
    const isProd = mode === 'production';

    const options: BuildOptionsI = {
        mode,
        isDev,
        isProd,
        paths,
        port,
    };

    return buildWebpackConfig(options);
};
