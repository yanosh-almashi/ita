import { createMuiTheme, withStyles } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#24c3f9'
    },
    error: {
      main: '#d73c2a'
    },
    secondary: {
      main: '#24c3f9'
    }
  }
});

export const GlobalCSS = withStyles({
  '@global': {
    '.MuiButton-contained': {
      fontSize: '14px',
      borderRadius: '50px',
      fontWeight: 'bold',
      letterSpacing: '1px',
      color: '#f8f7ff',
      '&:hover': {
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        color: '#20233f'
      }
    },
    '.MuiOutlinedInput-input': {
      padding: '10px 15px',
      width: '450px'
    },
    '.MuiOutlinedInput-root': {
      borderRadius: '50px'
    },
    '.MuiInputLabel-outlined': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '23px',
      fontSize: '14px',
      color: '#20233f',
      transition: 'all 0.2s ease-in-out'
    },
    '.MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(0, -37px) scale(0.9)'
    },

    '.MuiOutlinedInput-root.MuiOutlinedInput-notchedOutline': {
      borderColor: '#ffffff',
      backgroundColor: '#ffffff'
    },
    '.MuiAppBar-colorDefault': {
      backgroundColor: 'transparent'
    },
    '.MuiTabs-flexContainer': {
      marginLeft: '100px'
    },
    '.MuiPaper-elevation4': {
      boxShadow: 'none',
      borderBottom: '1px solid #24c3f9'
    }
  }
})(() => null);
