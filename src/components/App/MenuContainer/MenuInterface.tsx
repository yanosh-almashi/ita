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
        path: '/random',
        next: '2-home'
      },
      {
        id: '22',
        name: 'Schedule',
        path: '/schedule',
        next: '2-home'
      }
    ]
  },
  '2-tools': {
    menuItems: [
      {
        id: '21',
        name: 'Random',
        path: '/random',
        next: '2-tools'
      },
      {
        id: '22',
        name: 'Schedule',
        next: '3-something'
      }
    ]
  },
  '3-something': {
    menuItems: [
      {
        id: '31',
        name: '3-something',
        path: '/random',
        next: '3-something'
      },
      {
        id: '32',
        name: '3-something',
        next: '3-something'
      }
    ]
  }
}

export default menuSections;