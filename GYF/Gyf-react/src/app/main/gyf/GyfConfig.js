import i18next from 'i18next';
import Example from './Gyf';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';
import { lazy } from 'react';

i18next.addResourceBundle('en', 'examplePage', en);
i18next.addResourceBundle('tr', 'examplePage', tr);
i18next.addResourceBundle('ar', 'examplePage', ar);

const ExampleConfig = {
  settings: {
    layout: {
      config: {
        toolbar: {
          display: false,
        },
        footer: {
          display: false,
        },
      },
    },
  },
  routes: [
    {
      
      path: '/GYF',
      component: lazy(()=> import('./Gyf')),
    },
   
    {
      path:'/crudProd/:producto',
      component: lazy(()=>import('./crudProducto'))
    }
  ],
};

export default ExampleConfig;


