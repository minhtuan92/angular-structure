import { Routes } from '@angular/router';

import { ItemEditorComponent } from './item-editor/item-editor.component';

export default <Routes>[
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        component: ItemEditorComponent,
        providers: [],
      },
    ],
  },
];
