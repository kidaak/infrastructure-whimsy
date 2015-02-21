var websocketHandler = SocketHandler();

var DocumentList = React.createClass({
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
        <Document filename={doc.filename}>{doc.filename}</Document>
      );
    }.bind(this));
  },

  render: function() {
    return (
      <div className="documentList">
        {this.documents}
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
    return {data: []};
  },
  render: function() {
    return (
      <div className="worklistBox">
        <h3>Worklist</h3>
        <DocumentList data={this.state.data} />
      </div>
    );
  }
});


React.render(
    <WorkListView />,
    document.getElementById('worklist')
);
