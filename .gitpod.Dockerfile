FROM gitpod/workspace-full

# Install mongodb
RUN sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
RUN echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
RUN sudo apt-get update \
 && sudo apt-get install -y mongodb-org \
 && sudo apt-get clean \
 && sudo rm -rf /var/lib/apt/lists/*
RUN sudo mkdir -p /data/db \
 && sudo chown gitpod:gitpod -R /data/db
RUN npm install -g nodemon
RUN npm install --save mongoose
RUN npm install --save pug
RUN npm install --save body-parser
RUN nodemon
 
#FROM gitpod/workspace-mysql
                    
#USER gitpod

# Setup Heroku CLI
#RUN curl https://cli-assets.heroku.com/install.sh | sh

# Setup MongoDB
#RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
#RUN echo "deb http://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.0.list
#RUN apt-get update -y
#RUN touch /etc/init.d/mongod
#RUN apt-get -y install mongodb-org mongodb-org-server -y
#RUN apt-get update -y
#RUN apt-get -y install links

#USER gitpod
# Local environment variables
# C9USER is temporary to allow the MySQL Gist to run
#ENV C9_USER="gitpod"
#ENV PORT="8080"
#ENV IP="0.0.0.0"
#ENV C9_HOSTNAME="localhost"

#USER root
# Switch back to root to allow IDE to load
# Install custom tools, runtime, etc. using apt-get
# For example, the command below would install "bastet" - a command line tetris clone:
#
# RUN sudo apt-get -q update && #     sudo apt-get install -yq bastet && #     sudo rm -rf /var/lib/apt/lists/*
#
# More information: https://www.gitpod.io/docs/config-docker/
