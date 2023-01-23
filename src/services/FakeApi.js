const db = {
  categories: [
    { id: '1', category: 'windows 10' },
    { id: '2', category: 'GitHub' },
    { id: '3', category: 'PowerShell' },
    { id: '4', category: 'StudioOne' },
  ],
  shortcuts: [
    {
      id: 'id-1',
      category: 'windows 10',
      shortCut: 'Ctrl+A',
      desctiption: 'Select All',
    },
    {
      id: 'id-2',
      category: 'windows 10',
      shortCut: 'Ctrl+F',
      desctiption: 'Search',
    },
    {
      id: 'id-3',
      category: 'GitHub',
      shortCut: 'git add .',
      desctiption: 'Add modifying files',
    },
    {
      id: 'id-4',
      category: 'PowerShell',
      shortCut: 'dir',
      desctiption: 'Folder',
    },
  ],
};

export const getShortCut = () => {
  return Promise.resolve(db.shortcuts);
};

export const getCategories = () => {
  return Promise.resolve(db.categories);
};

export const getShortCutById = id => {
  return Promise.resolve(db.shortcuts.find(shortcut => shortcut.id === id));
};
