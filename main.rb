require 'logger'
require 'multi_json'
require 'oj'
require 'sinatra'
require 'yaml'

class WhimsyApp < Sinatra::Base

  def self.config
    @@config ||= Sinatra::Config.load_config(WhimsyApp.development?)
  end
  
  configure do
    load_config
    @@logger = Logger.new(STDOUT)
  end

  Dir["#{File.dirname(File.absolute_path(__FILE__))}/middleware/*.rb"].each {|file| require file}
  use Rack::WebSocketHandler

  # Load all of the routes
  Dir["#{File.dirname(File.absolute_path(__FILE__))}/routes/*.rb"].each {|file| require file}

  # start the server if ruby file executed directly
  run! if app_file == $0
end
