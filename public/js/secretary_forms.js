var docTypes = ['icla', 'grant', 'ccla', 'nda', 'other'];

var DocumentForm = React.createClass({displayName: "DocumentForm",
  getInitialState: function() {
    return {display_form: ''};
  },
  
  handleDocTypeChange: function(event) {
    var type = event.target.value;
    this.setState({display_form: type});
  },

  render: function() {
    var types = _.map(docTypes, function (docType) {
      return (
        React.createElement("input", {type: "radio", name: "doctype", onChange: this.handleDocTypeChange, value: doctype})
      );
    }.bind(this));

    var formToDisplay = null;
    switch(this.state.display_form) {
      case 'icla':
        formToDisplay = IclaForm;
        break;
      case 'nda':
        formToDisplay = NdaForm;
        break;
      case 'grant':
        formToDisplay = GrantForm;
        break;
      case 'ccla':
        formToDisplay = CclaForm;
        break;
      case 'other':
        formToDisplay = OtherForm;
        break;
      default:
        formToDisplay = null;
    }

    return (
      React.createElement("form", {className: "documentForm"}, 
        types, 
        formToDisplay
      )
    );
  }
});

var IclaForm = React.createClass({displayName: "IclaForm",
  render: function() {
    return (
      React.createElement("div", {className: "specificForm"}, 
        React.createElement("input", {name: "realname", type: "text"}), 
        React.createElement("input", {name: "pubname", type: "text"}), 
        React.createElement("input", {name: "email", type: "text"}), 
        React.createElement("input", {name: "filename", type: "text"}), 
        React.createElement("input", {name: "user_id", type: "text"}), 
        React.createElement("input", {name: "pmc", type: "text"}), 
        React.createElement("input", {name: "podling", type: "text"}), 
        React.createElement("input", {name: "vote_link", type: "text"})
      )
    );
  }
});

var NdaForm = React.createClass({displayName: "NdaForm",
  render: function() {
    return (
      React.createElement("div", {className: "specificForm"}, 
        React.createElement("input", {name: "name", type: "text"}), 
        React.createElement("input", {name: "id", type: "text"}), 
        React.createElement("input", {name: "email", type: "email"}), 
        React.createElement("input", {name: "filename", type: "text"})
      )
    );
  }
});

var GrantForm = React.createClass({displayName: "GrantForm",
  render: function() {
    return (
      React.createElement("div", {className: "specificForm"}, 
        React.createElement("input", {name: "from", type: "text"}), 
        React.createElement("textarea", {name: "description", rows: "5"}), 
        React.createElement("input", {name: "name", type: "text"}), 
        React.createElement("input", {name: "email", type: "email"}), 
        React.createElement("input", {name: "filename", type: "text"}), 
        React.createElement("input", {name: "pmc", type: "text"}), 
        React.createElement("input", {name: "podling", type: "text"})
      )
    );
  }
});

var CclaForm = React.createClass({displayName: "CclaForm",
  render: function() {
    return (
      React.createElement("div", {className: "specificForm"}, 
        React.createElement("input", {name: "company", type: "text"}), 
        React.createElement("input", {name: "product", type: "text"}), 
        React.createElement("input", {name: "contact", type: "text"}), 
        React.createElement("input", {name: "email", type: "text"}), 
        React.createElement("textarea", {name: "employees", rows: "5"}), 
        React.createElement("input", {name: "filename", type: "text"}), 
        React.createElement("input", {name: "pmc", type: "text"}), 
        React.createElement("input", {name: "podling", type: "text"})
      )
    );
  }
});

var OtherForm = React.createClass({displayName: "OtherForm",
  render: function() {
    return (
      React.createElement("div", {className: "specificForm"}, 
        React.createElement("div", {className: "fileActionBlock"}, 
          React.createElement("input", {type: "submit", name: "action", value: "burst"}), 
          React.createElement("input", {type: "submit", name: "dest", value: "flip"}), 
          React.createElement("input", {type: "submit", name: "dest", value: "restore"}), 
          React.createElement("input", {type: "submit", name: "dest", value: "rotate right"}), 
          React.createElement("input", {type: "submit", name: "dest", value: "rotate left"})
        ), 
        React.createElement("div", {className: "classificationBlock"}, 
          React.createElement("input", {type: "submit", name: "dest", value: "operations"}), 
          React.createElement("input", {type: "submit", name: "dest", value: "dup"}), 
          React.createElement("input", {type: "submit", name: "dest", value: "junk"}), 
          React.createElement("input", {type: "submit", name: "dest", value: "incomplete"}), 
          React.createElement("input", {type: "submit", name: "dest", value: "unsigned"})
        )
      )
    );
  }
});
