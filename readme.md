## Laravel PHP Framework

[![Build Status](https://travis-ci.org/laravel/framework.svg)](https://travis-ci.org/laravel/framework)
[![Total Downloads](https://poser.pugx.org/laravel/framework/downloads.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/framework/v/stable.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/framework/v/unstable.svg)](https://packagist.org/packages/laravel/framework)
[![License](https://poser.pugx.org/laravel/framework/license.svg)](https://packagist.org/packages/laravel/framework)

### License

The Laravel framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)

### Tutorial on how to use Laravel 5 and Elixir with Bootswatch

Note:  I am assuming that you have installed node, gulp and bower on your dev machine

1. In the root directory of your Laravel 5 application type the following at the command prompt: 
	```
	npm install
    ```
	Note : The command **npm install** 
    is used in order to install gulp and laravel-elixir locally

	If you get an error message in OSX try typing the following at the command prompt:
	```
	sudo npm install
    ```
   (Note:  type **npm -v** to find the current version of current version of node)
 
2.  If you look at your Laravel 5 directory structure, you will now see a new folder under
 	the root folder called **node_modules**.

3.  Check to see if gulp is installed by typing the following at the command prompt: 
    ```
	gulp -v
	```
	in the root folder of your application

    In my case the output is:
	```
	-> gulp -v
	[07:45:14] CLI version 3.9.0
	[07:45:14] Local version 3.9.0
	```
	
4.  If gulp is not installed type the following at the command prompt:
	```	
	npm install --global gulp
	```
	
5. Now there are a couple of ways to install Bootstrap. I’ve decided to use bower since it’s fairly easy.
   To see if bower is installed type the following at the command prompt:
   ```
   	bower -v
   ```
   If bower is not installed on your system type the following at the command prompt:
   ```
   npm install -g bower
   ```
   
6. In the root folder of your application initialise bower with the following at the command prompt:
   ```
   bower init
   ```
   Answer the questions the best you can.  A new **bower.json** will be created in root folder
   of your application.  You can edit the **bower.json*** file later if you wish.

7. Create a **.bowerrc** at the root of your project and put the following code in the **.bowerc** file:
	```
	{
		"directory": "vendor/bower_components"
	}
	```
    With that code, we specify that all our libraries will be stored in **vendor/bower_components**.

8.  In the root folder of your application type the following at the command prompt:
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
	To see a list of bootswwtch options.


11. In the root of your application type the following at the command prompt:
	```	
	bower install bootswatch --save
    ```

12.  Now look in the **vendor/bower_components** folder.  There should be
	 a new folder called **bootswatch**.

13. View the **bower.json** file to see the new dependencies that have been added.


14. By default Laravel 5 uses less, so the file **gulpfile.js** should look like
    the code below:
    ```
    elixir(function(mix) {
    	mix.less('app.less');
    });
    ```

 15. Now delete the folder **resources/less/boostrap**(that comes with the default installation of Laravel 5)
 	 We will not use this folder.

 16. Delete the contents of the file **resources/less/app.less**.  This file should now
 	 be empty.

 17. Add a simple CSS class to the file **resources/assets/less/app.less**. 
     In this case a CSS class called **.flash**.  You can thank Jeffrey Way for this class.
     ```
	 .flash {
	  background: #f66422;
	 } 
	 ```

 18. In the public folder delete the folder **css** (this folder has a **app.css** file that you will
    also delete)


19. Now let's compile the new **app.less** file into a css file.  In the root directory of the Laravel 5
 	application type the following at the command prompt:
    ```
 	gulp
    ```
    
20.  Your public folder will now contain the complied **app.css** file inside
     a folder called css.  Yippee....... this worked!