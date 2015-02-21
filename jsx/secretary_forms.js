var docTypes = ['icla', 'grant', 'ccla', 'nda', 'other'];

var DocumentForm = React.createClass({
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
        <input type='radio' name='doctype' onChange={this.handleDocTypeChange} value={doctype} />
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
      <form className="documentForm">
        {types}
        {formToDisplay}
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
        <input name='user_id' type='text' />
        <input name='pmc' type='text' />
        <input name='podling' type='text' />
        <input name='vote_link' type='text' />
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
        <input name='pmc' type='text' />
        <input name='podling' type='text' />
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
        <input name='pmc' type='text' />
        <input name='podling' type='text' />
      </div>
    );
  }
});

var OtherForm = React.createClass({
  render: function() {
    return (
      <div className='specificForm'>
        <div className='fileActionBlock'>
          <input type ='submit' name='action' value='burst' />
          <input type='submit'  name='dest' value='flip' />
          <input type='submit'  name='dest' value='restore' />
          <input type='submit'  name='dest' value='rotate right' />
          <input type='submit'  name='dest' value='rotate left' />
        </div>
        <div className='classificationBlock'>
          <input type='submit' name='dest' value='operations' />
          <input type='submit' name='dest' value='dup' />
          <input type='submit' name='dest' value='junk' />
          <input type='submit' name='dest' value='incomplete' />
          <input type='submit' name='dest' value='unsigned' />
        </div>
      </div>
    );
  }
});
