var docTypes = ['icla', 'grant', 'ccla', 'nda', 'other'];

var DocumentForm = React.createClass({
  getInitialState: function() {

  },
  
  handleDocTypeChange: function(event) {
    var type = event.target.value;
  },

  render: function() {
    return (
      <form className="documentForm">
        <input type='radio' name='doctype' onChange={this.handleDocTypeChange} value='icla' />
        <input type='radio' name='doctype' onChange={this.handleDocTypeChange} value='grant' />
        <input type='radio' name='doctype' onChange={this.handleDocTypeChange} value='ccla' />
        <input type='radio' name='doctype' onChange={this.handleDocTypeChange} value='nda' />
        <input type='radio' name='doctype' onChange={this.handleDocTypeChange} value='other' />
        <input type="submit" value="post" />
      </form>
    );
  }
});

var IclaForm = React.createClass({
  render: function() {
    return (
      <div className='specificForm'>
        <input name='realname' type='text' />
        <input name='pubname' type='text' />
        <input name='email' type='text' />
        <input name='filename' type='text' />
      </div>
    );
  }
});

var NdaForm = React.createClass({
  render: function() {
    return (
      <div className='specificForm'>
        <input name='name' type='text' />
        <input name='id' type='text' />
        <input name='email' type='email' />
        <input name='filename' type='text' />
      </div>
    );
  }
});

var GrantForm = React.createClass({
  render: function() {
    return (
      <div className='specificForm'>
        <input name='from' type='text' />
        <textarea name='description' rows='5' />
        <input name='name' type='text' />
        <input name='email' type='email' />
        <input name='filename' type='text' />
      </div>
    );
  }
});

var CclaForm = React.createClass({
  render: function() {
    return (
      <div className='specificForm'>
        <input name='company' type='text' />
        <input name='product' type='text' />
        <input name='contact' type='text' />
        <input name='email' type='text' />
        <textarea name='employees' rows='5' />
        <input name='filename' type='text' />
      </div>
    );
  }
});
