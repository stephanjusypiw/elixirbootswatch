var elixir = require('laravel-elixir');

// create variables for paths
var bowerDirBootstrap = "vendor/bower_components/bootstrap/";
var bowerDirBootswatch = "vendor/bower_components/bootswatch";

elixir(function(mix){
    // Copy the files that bower has fetched. Note that gulp tasks run
    // asynchronously. This means a dependent task, such as less(),
    // may run before copy() finishes. If this happens then just
    // run gulp twice. Not an elegant solution, but it works.
    mix.copy(
        'vendor/bower_components/jquery/dist/jquery.js',
        'resources/assets/js/jquery.js'

        // I will use the entire bootswatch library
    ).copy(
         bowerDirBootswatch,
        'resources/assets/less/bootswatch'
    ).copy(
         bowerDirBootstrap + 'less',
        'resources/assets/less/bootstrap'
    ).copy(
        bowerDirBootstrap + 'dist/js/bootstrap.js',
        'resources/assets/js/bootstrap.js'
    ).copy(
        bowerDirBootstrap + 'dist/fonts',
        'public/fonts'
    );

    // Combine scripts
    mix.scripts([
            'js/jquery.js',
            'js/bootstrap.js'
        ],
        'public/js/admin.js',
        'resources/assets'
    );

    // Compile Less into the public/css folder
    mix.less('app.less', 'public/css');
});
