# FCS peer-review tool

## Setup

<br> 
Installing Composer is different in both Windows and Mac. I am providing the link to install Composer in your system here.

https://www.hostinger.com/tutorials/how-to-install-composer#2_Installing_Composer_on_Windows
<br>

Once you have installed the composer move to this repo and open cmd or terminal according to your system here and run

`composer install`

<br>
<br>

## Setup database

This part assumes that you have a local mysql hosting service such as MAMP or XAMPP exist on your system.
<br>
Open its admin panel create a new user with credentials provided below.

<br>
User: sa 
<br>
Password: root 
<br>

Ensure that you have provided all the access to the user which is all the admin privileges. sa stands for System Administrator.
<br>
The current build of the system assumes that you are running it on your local machine and the hosting procedures would be created later.

## Build

Run this command and keep the terminal or cmd open

`php artisan serve`

Keeping the previous terminal open a new terminal and run the following command

`npm run dev`

Using the same method as we followed on the previous command keep the terminals open, open a new terminal and run the following command.

`php artisan migrate` (if you have a database set up)
