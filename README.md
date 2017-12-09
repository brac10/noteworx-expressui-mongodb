# NoteWorx README

A basic note application that uses an [ExpressJS] frontend to capture and manage notes, and [MongoDB] to store notes.

## Features

* Add a note
* Edit a note
* Remove a note
* List all notes

## High Level Design

![noteworx-expressui-mongodb](https://user-images.githubusercontent.com/33935506/33606066-cf10adae-d9c4-11e7-8661-ec93d3d0fcd7.PNG)

## Screenshots

![noteworx-expressui-mongodb-1](https://user-images.githubusercontent.com/33935506/33793938-33142184-dcca-11e7-937c-d19dbf32fd01.PNG) ![noteworx-expressui-mongodb-2](https://user-images.githubusercontent.com/33935506/33793939-335239ba-dcca-11e7-9dfb-356cbbf3e4c4.PNG) ![noteworx-expressui-mongodb-3](https://user-images.githubusercontent.com/33935506/33793940-33881a58-dcca-11e7-85e2-7d7f1f42dec7.PNG) ![noteworx-expressui-mongodb-4](https://user-images.githubusercontent.com/33935506/33793941-34a1bd54-dcca-11e7-85e9-dc583771953a.PNG) ![noteworx-expressui-mongodb-5](https://user-images.githubusercontent.com/33935506/33793942-34d4c370-dcca-11e7-8f6f-b43b9e389f00.PNG)
![noteworx-expressui-mongodb-6](https://user-images.githubusercontent.com/33935506/33793943-350d2058-dcca-11e7-8a75-94d4d162d423.PNG)
![noteworx-expressui-mongodb-7](https://user-images.githubusercontent.com/33935506/33793944-354098c0-dcca-11e7-841d-c0752357113e.PNG)
![noteworx-expressui-mongodb-8](https://user-images.githubusercontent.com/33935506/33793945-3575e214-dcca-11e7-8f12-cdbe28b030dd.PNG)
![noteworx-expressui-mongodb-9](https://user-images.githubusercontent.com/33935506/33793946-35aa1660-dcca-11e7-827a-e9a10e410f07.PNG)
![noteworx-expressui-mongodb-10](https://user-images.githubusercontent.com/33935506/33793947-35de63ac-dcca-11e7-84c5-f81ac0f4cf7b.PNG)

---

## Developed With

* [NodeJS] - Javascript runtime
* [MongoDB] - NoSQL database
* [Docker] - Used to host MongoDB instance (Not manadatory. See other options below)
* [ExpressJS] - A web application framework for Node.js
* [Handlebars] - Lets you build semantic templates
* [Bootstrap v4.0.0-beta.2] - Build responsive, mobile-first projects

---

## Related Projects

* [noteworx-cli-fs]

  A basic note application that uses a CLI (Command Line Interface) frontend to capture and manage notes, and a file system to store notes 

* [noteworx-cli-mongodb]

  A basic note application that uses a CLI (Command Line Interface) frontend to capture and manage notes, and mongodb to store notes 

* [noteworx-cli-mongoose]

  A basic note application that uses a CLI (Command Line Interface) frontend to capture and manage notes, Mongoose ODM to manage MongoDB interaction, and mongodb to store notes

* [noteworx-cli-couchbase]

  A basic note application that uses a CLI (Command Line Interface) frontend to capture and manage notes, and couchbase as a data store

* [noteworx-cli-express-mongodb]

  A basic note application that uses a CLI (Command Line Interface) frontend to capture and manage notes, an express note management API built using Express, and Mongodb to store notes

* [noteworx-react-mongodb]

  A basic note application that uses React frontend to capture and manage notes, an api written in ExpressJS, and mongodb to store notes

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* NodeJS

  The following version of Node and Npm are required:

  * Node 8.x
  * Npm 3.x

  Type the following commands in the terminal to verify your node and npm versions

  ```bash
  node -v
  npm -v
  ```

* MongoDB

  MongoDB 3.x is required

  Type the following command to verify that MongoDB is running on your local machine

  ```bash
  mongo -version
  ```

  See alternative MongoDB options below

### MongoDB Setup

A running instance of MongoDB is required. Alternatively use a hosted MongoDB from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or [MLab](https://mlab.com/)

One of the 3 options below is recommended to get up and running with MongoDB:

* Install and host locally
* Install and host in Docker
* Register for third party MongoDB hosting
  * Register for and use MongoDB Atlas (Database As A Service)
  * Register for and use MLab (Database As A Service)

#### Install and Host MongoDB Locally

Installing MongoDB is relatively straight forward. There are currently 3 platform (Windows, Linux, OSX) releases available and can be found here

For more specific installation instructions, please see the following links:

* [Install MongoDB On Linux](https://docs.mongodb.com/v3.0/administration/install-on-linux/)

* [Install MongoDB On Windows](https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-windows/)

* [Install MongoDB On OSX](https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-os-x/)

#### Install And Host Using Docker

##### Run MongoDB Using Named Volume

To run a new MongoDB container, execute the following command from the CLI:

```docker
docker run --rm --name mongo-dev -p 127.0.0.1:27017:27017 -v mongo-dev-db:/data/db -d mongo
```

CLI Command | Description
--- | ---
--rm | remove container when stopped
--name mongo-dev | give container a custom name
-p | map host port to container port
-v mongo-dev-db/data/db | map the container volume 'data/db' to a custom name 'mongo-dev-db'
-d mongo | run mongo container as a daemon in the background

##### Run MongoDB Using Bind Mount

```bash
cd
mkdir -p mongodb/data/db
docker run --rm --name mongo-dev -p 127.0.0.1:27017:27017 -v ~/mongodb/data/db:/data/db -d mongo
```

CLI Command | Description
--- | ---
--rm | remove container when stopped
--name mongo-dev | give container a custom name
-p | map host port to container port
-v ~/mongodb/data/db/data/db | map the container volume 'data/db' to a bind mount '~/mongodb/data/db'
-d mongo | run mongo container as a daemon in the background

#### Third Party Hosting

##### MongoDB Atlas

[MongoDB Atlas](https://www.mongodb.com/cloud/atlas) is basically a database as a service and is hosted in the cloud. That means that you don't need to install or setup anything to start using MongoDB.

You can get started for free by registering [here](https://www.mongodb.com/cloud/atlas). The free tier entitles you to 512MB storage.

Please review the documentation [here](https://docs.atlas.mongodb.com/)

##### MLab

[MLab](https://mlab.com/) also provides MongoDB cloud hosting in the form of database as a service. Once again there is no installation or setup required.

To get started, signup for free account [here](https://mlab.com/signup/). The free tier entitles you to 500MB storage.

Please review the documentation [here](https://docs.mlab.com/)

### Install

Follow the following steps to get development environment running.

1. Clone 'noteworx-expressui-mongodb' repository from GitHub

   ```bash
   git clone https://github.com/drminnaar/noteworx-expressui-mongodb.git
   ```

   _or using ssh_

   ```bash
   git clone git@github.com:drminnaar/noteworx-expressui-mongodb.git
   ```

1. Install node modules

   ```bash
   cd noteworx-expressui-mongodb
   npm install
   ```

### Run ESlint

* Lint project using ESLint

  ```bash
  npm run lint
  ```

* Lint project using ESLint, and autofix

  ```bash
  npm run lint:fix
  ```

### Run App

* Run start

  This will start the server with the website hsoted at default port 8000

  ```javascript
  npm start
  ```

  ```plain
  Open 'http://localhost:8000' in the browser
  ```

* Run Express server to host API on default port 8000

  ```javascript
  npm run serve
  ```

* Run Express server to host API on default port 8000 with file change monitoring

  ```javascript
  npm run serve:dev
  ```

---

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/drminnaar/noteworx-expressui-mongodb/tags).

## Authors

* **Douglas Minnaar** - *Initial work* - [drminnaar](https://github.com/drminnaar)

[NodeJS]: https://nodejs.org
[MongoDB]: https://www.mongodb.com
[ExpressJS]: http://expressjs.com
[Docker]: https://www.docker.com
[Handlebars]: http://handlebarsjs.com
[Bootstrap v4.0.0-beta.2]: https://getbootstrap.com

[noteworx-cli-fs]: https://github.com/drminnaar/noteworx-cli-fs
[noteworx-cli-mongodb]: https://github.com/drminnaar/noteworx-cli-mongodb
[noteworx-cli-mongoose]: https://github.com/drminnaar/noteworx-cli-mongoose
[noteworx-cli-couchbase]: https://github.com/drminnaar/noteworx-cli-couchbase
[noteworx-cli-express-mongodb]: https://github.com/drminnaar/noteworx-cli-express-mongodb
[noteworx-expressui-mongodb]: https://github.com/drminnaar/noteworx-expressui-mongodb
[noteworx-react-mongodb]: https://github.com/drminnaar/noteworx-react-mongodb