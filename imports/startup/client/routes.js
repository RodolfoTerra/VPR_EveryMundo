import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';

// Import templates pages to VPR
import '../../ui/pages/users/user.js';


// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

FlowRouter.route('/users', {
  name: 'App.users',
  action() {
    BlazeLayout.render('App_body', { main: 'userList' });
  },
});

FlowRouter.route('/users-add', {
  name: 'App.users-add',
  action() {
    BlazeLayout.render('App_body', { main: 'userAdd' });
  },
});
