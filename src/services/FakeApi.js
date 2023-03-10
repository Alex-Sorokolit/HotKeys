let db = {
  categories: [
    { id: '1', category: 'windows 10' },
    { id: '2', category: 'GitHub' },
    { id: '3', category: 'PowerShell' },
    { id: '4', category: 'Chrome' },
  ],

  shortcuts: [
    {
      id: 'id-1',
      category: 'windows 10',
      shortcut: 'Ctrl+A',
      description: 'Select All',
    },
    {
      id: 'id-2',
      category: 'windows 10',
      shortcut: 'Ctrl+F',
      description: 'Search',
    },
    {
      id: 'id-3',
      category: 'GitHub',
      shortcut: 'git add .',
      description: 'Add modifying files',
    },
    {
      id: 'id-4',
      category: 'PowerShell',
      shortcut: 'dir',
      description: 'Folder',
    },
  ],
};

// const Data = [
//   {
//     categoryId: 'c1',
//     catName: 'Chrom',
//     shortcuts: [
//       {
//         id: 'id-5',
//         shortcut: 'Ctrl + L',
//         description: 'Перемістить курсор в поле шляху',
//       },
//       {
//         id: 'id-6',
//         shortcut: 'Ctrl + U',
//         description: 'Відкриває код сторінки',
//       },
//     ],
//   },
//   {
//     categoryId: 'c2',
//     catName: 'StudioOne',
//     shortcuts: [
//       {
//         id: 'id-3',
//         shortcut: 'Ctrl + L',
//         description: 'Перемістить курсор в поле шляху',
//       },
//       {
//         id: 'id-8',
//         shortcut: 'Ctrl + U',
//         description: 'Відкриває код сторінки',
//       },
//     ],
//   },
// ];

export const getShortCut = () => {
  return Promise.resolve(db.shortcuts);
};
export const addShortCut = newShortCut => {
  return (db.shortcuts = [...db.shortcuts, newShortCut]);
};
export const getCategories = () => {
  return Promise.resolve(db.categories);
};

export const getShortCutById = id => {
  return Promise.resolve(db.shortcuts.find(shortcut => shortcut.id === id));
};
