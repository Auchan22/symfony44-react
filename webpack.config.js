const Encore = require('@symfony/webpack-encore');
const dotenv = require("dotenv");
const webpack = require("webpack");

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/symfony-react-wp/public/build')
    .enableReactPreset()
    .addEntry('app', './frontend/src/main.jsx')
    .enableStimulusBridge('./assets/controllers.json')
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })
    .configureDefinePlugin(options => {
        const env = dotenv.config({path: "./.env"});

        if (env.error) {
            throw env.error;
        }

        options['process.env'].ENV = JSON.stringify(env.parsed);
    })
    .addPlugin(new webpack.ProvidePlugin({"React": "react"}))
;

const prodConfig = Encore.getWebpackConfig();
prodConfig.name = "prodConfig"

Encore.reset();

Encore
    .setOutputPath('public/local_build/')
    .setPublicPath('/symfony-react-wp/public/local_build')
    .enableReactPreset()
    .addEntry('app-local', './frontend/src/main.jsx')
    .enableStimulusBridge('./assets/controllers.json')
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })
    .configureDefinePlugin(options => {
        const env = dotenv.config({path: "./.env.local"});

        if (env.error) {
            throw env.error;
        }

        options['process.env'].ENV = JSON.stringify(env.parsed);
    })
    .addPlugin(new webpack.ProvidePlugin({"React": "react"}))
;

const localConfig = Encore.getWebpackConfig();
localConfig.name = "localConfig";

module.exports = [prodConfig, localConfig];

