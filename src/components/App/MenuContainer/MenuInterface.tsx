const menuSections = {
  'root': {
    menuItems: [
      {
        id: '11',
        name: 'Home',
        next: '2-home'
      },
      {
        id: '12',
        name: 'Tools',
        next: '2-tools'
      }
    ]
  },
  '2-home': {
    menuItems: [
      {
        id: '21',
        name: 'Main',
        path: '/random'
      },
      {
        id: '22',
        name: 'Schedule',
        path: '/schedule'
      }
    ]
  },
  '2-tools': {
    menuItems: [
      {
        id: '21',
        name: 'Random',
        path: '/random'
      },
      {
        id: '22',
        name: 'Schedule',
        path: '/schedule'
      }
    ]
  }
}

export default menuSections;