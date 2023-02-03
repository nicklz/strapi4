module.exports = ({ env }) => ({


  // enable a custom plugin
  'strapi-plugin-menus': {
    // my-plugin is going to be the internal name used for this plugin
    enabled: true,
    resolve: './src/plugins/strapi-plugin-menus',
  }
});
