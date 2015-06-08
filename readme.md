## Laravel PHP Framework

[![Build Status](https://travis-ci.org/laravel/framework.svg)](https://travis-ci.org/laravel/framework)
[![Total Downloads](https://poser.pugx.org/laravel/framework/downloads.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/framework/v/stable.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/framework/v/unstable.svg)](https://packagist.org/packages/laravel/framework)
[![License](https://poser.pugx.org/laravel/framework/license.svg)](https://packagist.org/packages/laravel/framework)

### License

The Laravel framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)

### Tutorial on how to use Laravel 5 and Elixir with Bootswatch
1. In the root directory of your Laravel 5 application type the command: 
	```
	npm install
    ```
	Note : The command **npm install** 
    is used in order to install gulp and laravel-elixir locally

	If you get an error message in OSX try:
	```
	sudo npm install
    ```
   (Note:  type **npm -v** to find the current version of current version of node)
 
2.  If you look at your Laravel 5 directory structure, you will now see a new folder under
 	the root folder called **node_modules**.

3.  Check to see if gulp is installed by typing in the root of your application
    ```
	gulp -v
	```
	In my case the output is:
	```
	-> gulp -v
	[07:45:14] CLI version 3.9.0
	[07:45:14] Local version 3.9.0
	```