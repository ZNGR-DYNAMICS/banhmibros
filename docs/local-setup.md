# 1 Local Setup
This guide provides detailed instruction for setting up the project on a local environment for development. It covers configuring a local PHP server, setting up a MySQL database, and initializing the project on Visual Studio Code with Node. 

- [1 Local Setup](#1-local-setup)
- [2 Requirements](#2-requirements)
- [3 Local Setup](#3-local-setup)
  - [3.1 API Setup](#31-api-setup)
  - [3.2 Database Setup](#32-database-setup)

<br>

# 2 Requirements

In order to run the project, the following system requirements need to be met. 

- Visual Studio Code (VSC)
    - Recommended Extensions: GitHub Actions, PHP Intelephense (backend only), Prettier, Tailwind CSS Intellisense, Auto Rename Tag
- Latest Version of Node, v22.12.0
- Latest Version of npm, v10.9.2
- GitHub Account and set up in VSC

Backend Development: 

- Local version of [PHP](https://www.php.net/), v8.4.2
- MySQL Installer, MySQL Command Line, v8.0, (download could not be found)

<br>

# 3 Local Setup

- Open Visual Studio Code
- Open the local folder for the project to be in. Recommended: /ZNGR_DYNAMICS/BanhMiBros
- Clone a GitRepo through the Welcome page or:
    - Open Terminal
    - Ensure correct path
    - use `git clone <url>` to clone the repository to local
- Open Terminal, if not already
- Run `npm i`

## 3.1 API Setup

In order for the api to work properly, PHP and MySQL need to be started, if in the development environment.

1. Create an `api-config.json` file inside `/api`.
2. Set the content of the file to: 

```php
{
    "devApiUrl": "http://localhost:8000/api",
    "previewApiUrl": "https://vite.zngr-dynamics.ch/api",
    "productionApiUrl": "https://api.production.domain"
}
```

## 3.2 Database Setup

1. Create a `config.dev.php` file in `/`. 
2. Set the content of the file your matching setup of the MySQL database server: 

```php
<?php

define('DB_SERVER', 'localhost');
define('DB_NAME', 'dev_banhmibros'); // Your local database name
define('DB_USERNAME', 'root'); // Your local database username
define('DB_PASSWORD', 'admin'); // Your local database password

?>
```