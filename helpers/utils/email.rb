require 'erb'

require 'mail'
require 'sinatra/base'

module Sinatra::Utils
  class Email
    OLDPODLINGS = [
      'allura',
      'ambari',
      'blur',
      'celix',
      'chukwa',
      'deltaspike',
      'devicemap',
      'drill',
      'droids',
      'hcatalog',
      'jspwiki',
      'kafka',
      'kalumet',
      'mesos',
      'npanday',
      'odf',
      'onami',
      's4',
      'tashi',
      'vxquery',
      'wave'
    ]
    
    def initialize(method = :sendmail)
      Mail.defaults do
        delivery_method method
      end
      templates = Dir.glob(File.dirname(__FILE__) + '/email_templates/*.erb')
      @templates = templates.reduce({}) {|map, template| map[File.basename(template, '.erb')] = File.read(template); map}
    end

    def populate_template(document, message)
      if @templates.keys include? document.type
        template = @templates[document.type]
      end

      mail_template = ERB.new(template).result(document.instance_eval { binding })

      mail = Mail.new do
      end
    end

    def self.signature(user)
      case user
      when 'clr'
        {from: 'Craig L Russell <clr@apache.org>',
         sig: %Q{\n-- Craig L Russell\nSecretary, Apache Software Foundation}}
      when 'jcarman'
        {from: 'James Carman <jcarman@apache.org>',
         sig: %Q{\n-- James Carman\nAssistant Secretary, Apache Software Foundation}}
      when 'rubys'
        {from: 'Sam Ruby <rubys@apache.org>',
         sig: %Q{\n-- Sam Ruby\nApache Software Foundation Secretarial Team}}
      when 'sanders'
        {from: 'Scott Sander <sanders@apache.org>',
         sig: %Q{\n-- Scott Sander\nApache Software Foundation Secretarial Team}}
      when 'mnour'
        {from: 'Mohammad Nour El-Din <mnour@apache.org>',
         sig: %{\n-- Mohammad Nour El-Din\nApache Software Foundation Secretarial Team}}
      end
    end

    def self.podling_email(podling)
      if OLDPODLINGS.include? podling
        "#{podling}-private@incubator.apache.org"
      else
        "private@#{podling}.incubator.apache.org"
      end
    end
  end
end
