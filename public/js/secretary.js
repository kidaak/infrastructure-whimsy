var websocketHandler = SocketHandler();

var DocumentList = React.createClass({displayName: "DocumentList",
  getInitialState: function () {
    return {documents: []};
  },

  getDocuments: function () {
    this.setState({documents: []});
    var ws = this.props.websocketHandler;
    ws.sendRequest({command: 'list_documents'}, function (message) {
      this.setState({documents: message.data});
    }); 
  },

  formatDocuments: function () {
    var docs = _.map(this.documents, function(doc) {
      return (
        React.createElement(Document, {filename: doc.filename}, doc.filename)
      );
    }.bind(this));
  },

  render: function() {
    return (
      React.createElement("div", {className: "documentList"}, 
        this.documents
      )
    );
  }
});

var Document = React.createClass({displayName: "Document",
  getInitialState: function() {
    return {selected: false};
  },

  handleClick: function() {
    this.setState({selected: true});
  },

  render: function() {
    return (
      React.createElement("div", {className: "document"}, 
        React.createElement("h4", {className: "filename"}, 
          this.props.filename
        ), 
        this.props.children
      )
    );
  }
});

var WorkListView = React.createClass({displayName: "WorkListView",
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      React.createElement("div", {className: "worklistBox"}, 
        React.createElement("h3", null, "Worklist"), 
        React.createElement(DocumentList, {data: this.state.data})
      )
    );
  }
});


React.render(
    React.createElement(WorkListView, null),
    document.getElementById('worklist')
);
