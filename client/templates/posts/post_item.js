Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    console.log(this);
    a.href = this.url;
    return a.hostname;
  }
});