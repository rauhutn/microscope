if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Teleskope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });
  
  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });
  
  Posts.insert({
    title: 'The Meteor book',
    url: 'http://themeteorbook.com'
  });

}