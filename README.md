# Symfony 4.4 & React 🎷↔⚛
Despues de pelear un rato, pude descubrir la forma para implementar React y Symfony en el mismo proyecto.
Funciona tanto para el servidor propio de Symfony o el de Xampp/Wamp.

***TODO***
---
 - [ ] Ver si se puede implementar todo desde una carpeta de 'frontend'
 ## Pasos a seguir 🚶‍♂️

1. Preparar entorno en **Symfony**
	a. ``
composer create-project symfony/skeleton:<version> my_project_directory
``
	b. `cd my_project_directory && composer require webapp` (instala los paquetes necesarios para que sea una web app, sino instalar **twig, doctrine/annotations, makerBundle**)
2. Crear controlador en Symfony para renderizar los componentes (es decir, en este controlador vamos a renderizar el punto de entrada de nuestra app, ya se **app.js** o **main.jsx**, etc).
	a. `php bin/console make:controller DefaultController`
	````php
	<?php
    
	namespace App\Controller;
    
	use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
	use Symfony\Component\HttpFoundation\Response;
	use Symfony\Component\Routing\Annotation\Route;
    
	class DefaultController extends AbstractController
	{
	    /**
	     * @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
	     */
	    public function index()
	    {
	        return $this->render('default/index.html.twig');
	    }
	}
	````
	b. Preparar el template de twig (`default/index.html.twig`), para que renderice los componentes:
	````twig
	{% extends 'base.html.twig' %}
    
	 {% block title %} Symfony React Project {% endblock %}
    
	 {% block body %}
    
	     <div id="root"></div>
    
	 {% endblock %}
	````
3. Instalar el paquete de **webpack-encore-bundle**:
	a. `composer require symfony/webpack-encore-bundle`
	b. Luego ejecutar  `yarn install` (o `npm install`), para bajar todos los paquetes correspondientes y que nos ande React.
	c. Terminar de instalar las dependencias asociadas a React y al bundle:
	````bash
	$ yarn add @babel/preset-react --dev
	$ yarn add --dev react react-dom prop-types axios
	$ yarn add @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime
	````
4. Configurar **webpack.config.js**:
	````js
	const Encore = require('@symfony/webpack-encore');  
  
	if (!Encore.isRuntimeEnvironmentConfigured()) {  
		Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');  
	}  
  
	Encore  
	// directory where compiled assets will be stored  
	.setOutputPath('public/build/')  
	// public path used by the web server to access the output path  
	.setPublicPath('/symfony-react-wp/public/build')  
	.enableReactPreset()  
	// only needed for CDN's or sub-directory deploy  
	//.setManifestKeyPrefix('build/')  
	  
	/*  
	* ENTRY CONFIG  
	*  
	* Each entry will result in one JavaScript file (e.g. app.js)  
	* and one CSS file (e.g. app.css) if your JavaScript imports CSS.  
	*/  
	.addEntry('app', './assets/app.js')  
	.enableStimulusBridge('./assets/controllers.json')  
	  
	// enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)  
	  
	// When enabled, Webpack "splits" your files into smaller pieces for greater 	optimization.  
	.splitEntryChunks()  
	.enableSingleRuntimeChunk()  
	// will require an extra script tag for runtime.js  
	// but, you probably want this, unless you're building a single-page app  
  
	/*  
	* FEATURE CONFIG  
	*  
	* Enable & configure other features below. For a full  
	* list of features, see:  
	* https://symfony.com/doc/current/frontend.html#adding-more-features  
	*/  
	.cleanupOutputBeforeBuild()  
	.enableBuildNotifications()  
	.enableSourceMaps(!Encore.isProduction())  
	// enables hashed filenames (e.g. app.abc123.css)  
	.enableVersioning(Encore.isProduction())  
  
  
	// enables @babel/preset-env polyfills  
	.configureBabelPresetEnv((config) => {  
	config.useBuiltIns = 'usage';  
	config.corejs = 3;  
	})  
	  
	// enables Sass/SCSS support  
	//.enableSassLoader()  
  
	// uncomment if you use TypeScript  
	//.enableTypeScriptLoader()  
    
  
	// uncomment to get integrity="..." attributes on your script & link tags  
	// requires WebpackEncoreBundle 1.4 or higher  
	//.enableIntegrityHashes(Encore.isProduction())  
  
	// uncomment if you're having problems with a jQuery plugin  
	//.autoProvidejQuery()  
	;  
  
	module.exports = Encore.getWebpackConfig();
	````
5. Terminar de configurar Twig para que nos renderice los componentes de React:
	````html
	// templates/base.html.twig
    
	<!DOCTYPE html>
	<html>
	<head>
	    <meta charset="UTF-8">
	    <title>{% block title %}Welcome!{% endblock %}</title>
	    {% block stylesheets %}
	        {{ encore_entry_link_tags('app') }}
	    {% endblock %}
    
	    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
	    <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700">
	    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
	</head>
		<body>
		{% block body %}{% endblock %}
		{% block javascripts %}
		    {{ encore_entry_script_tags('app') }}
		{% endblock %}
		</body>
	</html>
	````

6. Ejecutar el build del frontend:
	````bash
	yarn encore dev --watch
	````

## Importante ❗
* `addEntry('app', './assets/app.js')`: Es el entrypoint que le decimos a webpack que queremos que nos empiece la aplicación. Es donde nosotros renderizamos todo para despues pasarselo a un html.
* Se siguio la guia de: [aca](https://www.twilio.com/blog/building-a-single-page-application-with-symfony-php-and-react)
### Gracias por Leer ❤
---
