const menuSections = {
  '1-root': {
    isOpen: true,
    menuItems: [
      {
        id: '11',
        name: 'Home',
        icon: 'icon-home',
        next: '2-home'
      },
      {
        id: '12',
        name: 'Tools',
        icon: 'icon-home',
        next: '2-tools'
      }
    ]
  },
  '2-home': {
    isOpen: false,
    menuItems: [
      {
        id: '21',
        name: 'Main',
        path: '/random',
        icon: 'icon-home',
        next: '2-home'
      },
      {
        id: '22',
        name: 'Schedule',
        path: '/schedule',
        icon: 'icon-home',
        next: '2-home'
      }
    ]
  },
  '2-tools': {
    isOpen: false,
    menuItems: [
      {
        id: '21',
        name: 'Random',
        path: '/random',
        icon: 'icon-home',
        next: '2-tools'
      },
      {
        id: '22',
        name: 'Schedule',
        icon: 'icon-home',
        next: '3-something'
      }
    ]
  },
  '3-something': {
    isOpen: false,
    menuItems: [
      {
        id: '31',
        name: '3-something',
        path: '/random',
        icon: 'icon-home',
        next: '3-something'
      },
      {
        id: '32',
        name: '3-something',
        icon: 'icon-home',
        next: '4-something'
      }
    ]
  },
  '4-something': {
    isOpen: false,
    menuItems: [
      {
        id: '41',
        name: '4-something',
        path: '/random',
        icon: 'icon-home',
        next: '4-something'
      },
      {
        id: '42',
        name: '4-something',
        icon: 'icon-home',
        next: '4-something'
      }
    ]
  }
}

export default menuSections;