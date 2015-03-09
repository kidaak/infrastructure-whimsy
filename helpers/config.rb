require 'sinatra/base'
require 'yaml'

module Sinatra
  def self.load_config(development = true)
    base_path = File.absolute_path(File.dirname(__FILE__))
    file = File.dirname(base_path) + '/config/config.yaml'
    dev_redis = File.dirname(base_path) + '/config/redis.development'
    if File.exist? file
      @@config = OpenStruct.new(Psych.load(File.read(file)))
      
      if development
        redis_config = Psych.load(File.read(dev_redis))
       config[:redis] = redis_config
      end
      @@config
    else
      raise "Unable to read #{file}"
    end
  end
end
