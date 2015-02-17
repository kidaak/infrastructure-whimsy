var docTypes = ['icla', 'grant', 'ccla', 'nda', 'other'];

var DocumentForm = React.createClass({displayName: "DocumentForm",
  getInitialState: function() {

  },
  
  handleDocTypeChange: function(event) {
    var type = event.target.value;
  },

  render: function() {
    return (
      React.createElement("form", {className: "documentForm"}, 
        React.createElement("input", {type: "radio", name: "doctype", onChange: this.handleDocTypeChange, value: "icla"}), 
        React.createElement("input", {type: "radio", name: "doctype", onChange: this.handleDocTypeChange, value: "grant"}), 
        React.createElement("input", {type: "radio", name: "doctype", onChange: this.handleDocTypeChange, value: "ccla"}), 
        React.createElement("input", {type: "radio", name: "doctype", onChange: this.handleDocTypeChange, value: "nda"}), 
        React.createElement("input", {type: "radio", name: "doctype", onChange: this.handleDocTypeChange, value: "other"}), 
        React.createElement("input", {type: "submit", value: "post"})
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
        React.createElement("input", {name: "filename", type: "text"})
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
        React.createElement("input", {name: "filename", type: "text"})
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
        React.createElement("input", {name: "filename", type: "text"})
      )
    );
  }
});
