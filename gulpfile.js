var elixir = require('laravel-elixir');


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
        'vendor/bower_components/bootswatch',
        'resources/assets/less/bootswatch'
    ).copy(
        'vendor/bower_components/bootstrap/less',
        'resources/assets/less/bootstrap'
    ).copy(
        'vendor/bower_components/bootstrap/dist/js/bootstrap.js',
        'resources/assets/js/bootstrap.js'
    ).copy(
        'vendor/bower_components/bootstrap/dist/fonts',
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
