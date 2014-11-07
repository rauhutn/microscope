var postsData = [
  {
    title: 'Introducing Teleskope',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  
  {
    title: 'The Meteor book',
    url: 'http://themeteorbook.com'
  },
  
  {
    title: 'wow, awesome',
    url: 'http://bing.com'
  }
];

Template.postsList.helpers({
  posts: postsData
});