const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const autoprefixer = require('autoprefixer');

module.exports = {
    entry: '../src/index.ts',
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: 'FestivalPlanner.js',
    },
    resolve: {
        modules: ['modules', 'node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.json'],
        plugins: [
            // Allow ts-loader to resolve modules according to baseUrl and paths in tsconfig.json
            new TsconfigPathsPlugin({
                configFile: path.join(__dirname, '../tsconfig.json'),
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            // Necessary for external CSS imports to work
                            // https://github.com/facebookincubator/create-react-app/issues/2677
                            ident: 'postcss',
                            plugins: () => [
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: ['babel-loader', 'ts-loader'],
            },
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' }),
    ]
};
