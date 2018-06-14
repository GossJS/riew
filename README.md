# Reiw - Presentation Broadcast System


1. Вещание в существующей локальной сети 

Вы получили IP-адрес в уже существующей сети, например 192.168.0.111

Склонируйте репозиторий в папку:
```
https://github.com/GossJS/riew.git
```

Разделите консоль на три части: ./client, ./server и ./web-server

В каждой части выполните yarn для загрузки зависимостей.

```
micro client/src/config.json
```

записываем этот IP 192.168.0.111 или подобный в раздел adress.

```
riew/client            		 	riew/server			riew/web-server	
yarn run build-prod  		
                       		 	node ./src/index.js		node ./src/index.js
```

Имя презентации slides.pdf в ./server/shared

последний столбец (web-server) выдаёт http://169.254.169.195:8080/control.html

Это пульт управления.

Остальные подсоединяются к  http://169.254.169.195:8080




## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need latest version of Node with npm to build and run this app. After installiation, clone this repo and modify config.json in client\src folder.

* **adress** - ip-adress of machine that will run app;
* **port** - server port;
* **document** - name of the .pdf file that you want to broadcast. Place .pdf into server\shared.

### Installing

Simply run these commands to install all packages and build apps:

```
$ cd riew
$ npm run setup
```

Use these commands to run server or client app:
 
```
$ npm run server
$ npm run client
```

To open app just run web-browser, type %app_ip_apdess%:8080 to open viewer, and /control.html to open clicker. 
Default password for clicker app - *test*. 
You can change it in server\src\index.js; change the value of *password* variable.
