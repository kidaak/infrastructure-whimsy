# Development

## Dependencies
* Ruby >= 2.0 
* [Node.js](https://nodejs.org/) (for JS dependency management tools + [React](http://facebook.github.io/react/))
* Redis
* Docker

## Starting the Docker container and Application

    # Start the containers
    docker run -d redis --name secretary-redis
    docker build -t secretary-app .
    docker run -i -t -v $(pwd):/whimsy --link secretary-redis:secretary-redis secretary-app --rm

    # Now you're in the container
    bundle install
    rake bootstrap
    puma

That should start a server listening on port 9292 serving the Secretary application.

## Install Dependencies Locally
If you want to do development outside of a Docker container and already have Ruby 2.2 and Node:

    bundle install
    rake bootstrap

