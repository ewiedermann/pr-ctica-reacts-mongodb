const path = requiere('path');
const HtmlWebpackPlugin = requiere('html-webpack-plugin');

//Objetos de configuración
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'development',
    resolve:{
        extensions:['.js','jsx'],
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
    ]
}