## Laravel PHP Framework

[![Build Status](https://travis-ci.org/laravel/framework.svg)](https://travis-ci.org/laravel/framework)
[![Total Downloads](https://poser.pugx.org/laravel/framework/downloads.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/framework/v/stable.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/framework/v/unstable.svg)](https://packagist.org/packages/laravel/framework)
[![License](https://poser.pugx.org/laravel/framework/license.svg)](https://packagist.org/packages/laravel/framework)

### License

The Laravel framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)

### Tutorial on how to use Laravel 5.0.16 and Elixir with Bootswatch (a Theme for Bootstrap)

This tutorial was conducted on a **Max OSX (10.10.4)** machine.  **Node**, **gulp** and **bower** where installed
in the locations:

```
/usr/local/bin/node 
/usr/local/bin/gulp
/usr/local/bin/bower
```



Note:   I am assuming that you have installed **node**, **gulp** and **bower** on your dev machine.
        Here we go.....

1. In the root directory of your Laravel 5.0.16 application type the following at the command prompt: 
	```
	npm install
    ```
	Note : The command **npm install** 
           is used in order to install **gulp** and **laravel-elixir** locally

	If you get an error message in OSX try typing the following at the command prompt:
	```
	sudo npm install
    ```
   (Note:  type **npm -v** to find the current version of **node**)
 
2.  If you look at your Laravel 5.0.16 directory structure, you will see a new folder under
 	the root folder called **node_modules**.

3.  Check to see if **gulp** is installed by typing the following in the root folder of your application:

    ```
	gulp -v
	```
	

    In my case the output is:
	```
	-> gulp -v
	[07:45:14] CLI version 3.9.0
	[07:45:14] Local version 3.9.0
	```
	
4.  If **gulp** is not installed type the following at the command prompt:
	```	
	npm install --global gulp
	```
	
5. Now there are a couple of ways to install **Bootstrap**. I’ve decided to use **bower** 
   since it’s fairly easy.
   
   To see if **bower** is installed type the following at the command prompt:
   ```
   	bower -v
   ```
   If **bower** is not installed on your system type the following at the command prompt:
   ```
   npm install -g bower
   ```
   
6. In the root folder of your application initialise **bower** by typing 
   the following at the command prompt:

   ```
   bower init
   ```
   
   Answer the questions the best you can.  A new **bower.json** will be created in root folder
   of your application.  You can edit the **bower.json** file later if you wish.

7. Create a **.bowerrc** at the root of your project and put the following code 
   in the **.bowerc** file:
   
	```
	{
		"directory": "vendor/bower_components"
	}
	```
	
    With that code, we specify that all our libraries will be stored in **vendor/bower_components**.

8.  In the root folder of your application type the following at the command prompt to search for
    **Bootstrap**.
    ```
	bower search bootstrap
	```
	You will see the list of bootstrap options.  There are HEAPS of bootstrap options.

9.  In the root of your application type the following at the command prompt:

    ```
	bower install bootstrap --save
    ```
    
	This will install bootstrap. There is no need to install JQuery because in this 
	case it's a dependency of bootstrap.

	Now look in the **vendor/bower_components** folder.  There should be
	2 new folders called **bootstrap** and **jquery**.

10. In the root of your application type the following at the command prompt:

    ```
	bower search bootswatch
    ```
    
	To see a list of bootswatch options.


11. In the root of your application type the following at the command prompt:

	```	
	bower install bootswatch --save
    ```

12.  Now look in the **vendor/bower_components** folder.  There should be
	 a new folder called **bootswatch**.

13. View the **bower.json** file to see the new dependencies that have been added.


14. By default Laravel 5.0.16 uses less, so the file **gulpfile.js** should look like
    the code below:
    
    ```
    elixir(function(mix) {
    	mix.less('app.less');
    });
    ```
    
15. Now delete the folder **resources/assets/less/boostrap** (that comes with the default installation of Laravel 5.0.16)
 	 We will not use this folder.

16. Delete the contents of the file **resources/assets/less/app.less**.  This file should now
 	 be empty.

17. Add a simple CSS class to the file **resources/assets/less/app.less**. 
    In this case a CSS class called **.flash**.  You can thank Jeffrey Way for this class.
    
    ```
    .flash {
        background: #f66422;
    } 
    ```

18. In the **public** folder delete the folder **css** (this folder has a **app.css** file that you will
    also delete)


19. Now let's compile the new **app.less** file into a css file.  In the root directory of the Laravel 5
 	application type the following at the command prompt:
 	
    ```
 	gulp
    ```
    
20.  Your **public** folder should now contain the complied **app.css** file inside
     a folder called **css**.  Yippee....... this worked!

21.  The next step is to expand the **gulpfile.js** to include **Bootstrap**, **Bootswatch** and
     **jQuery**.  
     This is the new **gulpfile.js** file.
     
     Note:  Many thanks to **raygun** from Laracasts who created the original **gulpfile.js** file.
            I could not get the correct result WITHOUT raygun's **gulpfile.js** file.
            
    ```
    var elixir = require('laravel-elixir');
    
    elixir(function(mix){
        // Copy the files that bower has fetched. Note that gulp tasks run
        // asynchronously. 
        mix.copy(
            'vendor/bower_components/jquery/dist/jquery.js',
            'resources/assets/js/jquery.js'
            // I will use the cerulean bootswatch theme
        ).copy(
            'vendor/bower_components/bootswatch/cerulean',
            'resources/assets/less/cerulean'
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
    
	```

22.  In the **resources/assests/app.less** file add the imports

	```
	@import "bootstrap/bootstrap";
	@import "cerulean/variables";
	```

23. Finally, if you want the entire bootswatch themes then change your **gulpfile.js**
   as show shown below:


   Old Code:
   ```
        // I will use the cerulean bootswatch theme
		    ).copy(
		        'vendor/bower_components/bootswatch/cerulean',
		        'resources/assets/less/cerulean'
   ```
    New Code:
    ```
    	     // I will use the entire bootswatch library
    		).copy(
        		'vendor/bower_components/bootswatch',
        		'resources/assets/less/bootswatch'
    ```
     Then in your **resources/assests/app.less** file add the following if you
     want, say the Cosmo theme.
     
     ```
     @import "bootstrap/bootstrap";
     @import "bootswatch/cosmo/variables";
     ```
     **NOTE:  DON'T FORGET TO RUN gulp AT THE COMMAND LINE AFTER YOU EDIT THE
     resources/assests/app.less file!**