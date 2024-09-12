import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { BuildOptionsI } from './types';

type DevServerType = DevServerConfiguration | undefined;

export const buildDevServer = (options: BuildOptionsI): DevServerType => {
    const { isDev, port } = options;

    if (isDev) {
        return {
            port,
            open: true,
            historyApiFallback: true,
        };
    }
};
