'use strict';

module.exports = {
  kind: 'collectionType',
  collectionName: 'nicktest',
  info: {
    displayName: 'Menu',
    singularName: 'menu',
    pluralName: 'nicktest',
    tableName: 'nicktest',
  },
  options: {
    draftAndPublish: false,
  },
  pluginOptions: {
    'content-manager': {
      visible: false,
    },
    'content-type-builder': {
      visible: false,
    },
  },
  attributes: {
    title: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'uid',
      targetField: 'title',
      required: true,
    },
    items: {
      type: 'relation',
      relation: 'oneToMany',
      target: 'plugin::nicktest.menu-item',
      mappedBy: 'root_menu',
    }
  },
};
