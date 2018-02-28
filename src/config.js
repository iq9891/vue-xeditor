export default {
  customConfig: '',
  extraPlugins: 'autoembed,embedsemantic,image2,uploadimage,uploadfile',
  removePlugins: 'about',
  height: this.height,
  contentsCss: [], // 可以注入css
  bodyClass: 'em-editor-body',
  format_tags: 'p;h1;h2;h3;pre',
  removeDialogTabs: 'image:advanced;link:advanced',
  stylesSet: [
    {
      name: 'Marker',
      element: 'span',
      attributes: {
        class: 'marker',
      },
    },
    {
      name: 'Cited Work',
      element: 'cite',
    },
    {
      name: 'Inline Quotation',
      element: 'q',
    },
    {
      name: 'Special Container',
      element: 'div',
      styles: {
        padding: '5px 10px',
        background: '#eee',
        border: '1px solid #ccc',
      },
    },
    {
      name: 'Compact table',
      element: 'table',
      attributes: {
        cellpadding: '5',
        cellspacing: '0',
        border: '1',
        bordercolor: '#ccc',
      },
      styles: {
        'border-collapse': 'collapse',
      },
    },
    {
      name: 'Borderless Table',
      element: 'table',
      styles: {
        'border-style': 'hidden',
        'background-color': '#E6E6FA',
      },
    },
    {
      name: 'Square Bulleted List',
      element: 'ul',
      styles: {
        'list-style-type': 'square',
      },
    },
    {
      name: 'Illustration',
      type: 'widget',
      widget: 'image',
      attributes: {
        class: 'image-illustration',
      },
    },
    {
      name: '240p',
      type: 'widget',
      widget: 'embedSemantic',
      attributes: {
        class: 'embed-240p',
      },
    },
    {
      name: '360p',
      type: 'widget',
      widget: 'embedSemantic',
      attributes: {
        class: 'embed-360p',
      },
    },
    {
      name: '480p',
      type: 'widget',
      widget: 'embedSemantic',
      attributes: {
        class: 'embed-480p',
      },
    },
    {
      name: '720p',
      type: 'widget',
      widget: 'embedSemantic',
      attributes: {
        class: 'embed-720p',
      },
    },
    {
      name: '1080p',
      type: 'widget',
      widget: 'embedSemantic',
      attributes: {
        class: 'embed-1080p',
      },
    },
  ],
};
