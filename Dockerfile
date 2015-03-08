FROM ubuntu:trusty
VOLUME /whimsy
WORKDIR /whimsy
ENV PATH $PATH:/whimsy/node_modules/.bin

RUN apt-get install -y software-properties-common && \
    apt-add-repository ppa:brightbox/ruby-ng && \
    apt-get update && \
    apt-get install -y ruby2.2 ruby2.2-dev nodejs-legacy npm git
RUN echo 'gem: --no-ri --no-rdoc' > /etc/gemrc && gem install --no-ri --no-rdoc bundle
  
EXPOSE 9292
