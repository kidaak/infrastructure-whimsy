require 'erb'
require 'faye/websocket'
require 'logger'
require 'multi_json'
require 'oj'

module Rack
  class WebSocketHandler
    KEEP_ALIVE = 15

    def initialize(app)
      @app = app
      @clients = []
      @development = @app.class.development?
    end

    def call(env)
      if Faye::WebSocket.websocket?(env)
        ws = Faye::WebSocket.new(env, nil, ping: KEEP_ALIVE)

        ws.on :open do |event|
          @clients << ws
          puts [:open, ws.object_id] if @development
        end

        ws.on :message do |event|
          puts [:message, event.data] if @development
          @clients.each {|client| client.send(handler(sanitize(event.data)))}
        end

        ws.on :close do |event|
          puts [:close, ws.object_id, event.code, event.reason] if @development
          @clients.delete(ws)
          ws = nil
        end
        ws.rack_response
      else
        # Pass through as a regular HTTP request
        @app.call(env)
      end
    end

    def handler(event)
      data = MultiJson.load(event)
      result = {'result' => [{'filename' => 'test'}], 'id' => data["id"]}
      puts result
      MultiJson.dump(result)
    end


    private
    def sanitize(message)
      json = MultiJson.load(message)
      json.each {|key, value| json[key] = ERB::Util.html_escape(value) }
      MultiJson.dump(json)
    end
  end
end
