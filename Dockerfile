FROM ubuntu:trusty
VOLUME /whimsy
WORKDIR /whimsy

RUN apt-get update && apt-get install -y redis-server && \
  sed -i 's/^\(bind .*\)$/# \1/' /etc/redis/redis.conf && \
  sed -i 's/^\(daemonize .*\)$/# \1/' /etc/redis/redis.conf && \
  sed -i 's/^\(dir .*\)$/# \1\ndir \/data/' /etc/redis/redis.conf && \
  sed -i 's/^\(logfile .*\)$/# \1/' /etc/redis/redis.conf

RUN apt-get -y install wget build-essential zlib1g-dev libssl-dev \
  libreadline6-dev libyaml-dev && cd /tmp && \
  wget -q http://cache.ruby-lang.org/pub/ruby/2.2/ruby-2.2.0.tar.gz && \
  tar xzf ruby-2.2.0.tar.gz && \
  cd ruby-2.2.0 && ./configure --enable-shared --prefix=/usr && \
  make && make install && cd .. && rm -rf ruby-2.2.0*
RUN gem install bundler

EXPOSE 6379

CMD redis-server
