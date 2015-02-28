var websocketHandler = SocketHandler();

var DocumentList = React.createClass({
  getInitialState: function () {
    return {documents: []};
  },

  formatDocuments: function (documents) {
    var docs = _.map(documents.result, function(doc) {
      return (
        <Document key={doc.filename} filename={doc.filename}>{doc.filename}</Document>
      );
    });
    return docs;
  },

  getDocuments: function () {
    this.setState({documents: []});
    var ws = this.props.websocketHandler;
    ws.sendRequest({command: 'list_documents'}, function (message) {
      console.log(message);
      var docs = this.formatDocuments(message);
      this.setState({documents: docs});
    }.bind(this)); 
  },

  componentWillMount: function() {
    this.getDocuments();
  },


  render: function() {
    return (
      <div className="documentList">
        {this.state.documents}
      </div>
    );
  }
});

var Document = React.createClass({
  getInitialState: function() {
    return {selected: false};
  },

  handleClick: function() {
    this.setState({selected: true});
  },

  render: function() {
    return (
      <div className="document">
        <h4 className="filename">
          {this.props.filename}
        </h4>
        {this.props.children}
      </div>
    );
  }
});

var WorkListView = React.createClass({
  getInitialState: function() {
    return {websocketHandler: null};
  },
  render: function() {
    return (
      <div className="worklistBox">
        <h3>Worklist</h3>
        <DocumentList websocketHandler={websocketHandler} />
      </div>
    );
  }
});

React.render(
    <WorkListView />,
    document.getElementById('worklist')
);
