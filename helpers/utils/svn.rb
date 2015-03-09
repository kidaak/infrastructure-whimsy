require 'sinatra/base'
require 'rye'

# TODO This should probably be merged with the ASF::SVN class at some point
module Sinatra::Utils
  class SvnException < StandardError; end

  class Svn
    attr_reader :path
    def initialize(path)
      @path = path
    end

    def svn(cmd)
      ret = Rye.shell(:svn, cmd)
      if ret.exit_status != 0
        error = %Q(SVN exited #{ret.exit_status}, failed to execute: #{cmd}
        Got back #{ret.stderr}
        )
        raise SvnException.new(error)
      end
    end

    def received_file_list
    end

  end
end
