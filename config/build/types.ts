type BuildModeType = 'development' | 'production';

export interface BuildEnvI {
    mode: BuildModeType;
    port: number;
}

export interface BuildPathsI {
    html: string;
    entry: string;
    build: string;
    src: string;
    sass: string[];
}

export interface BuildOptionsI {
    mode: BuildModeType;
    port: number;
    paths: BuildPathsI;
    isDev: boolean;
    isProd: boolean;
}
