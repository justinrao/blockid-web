import {white} from 'material-ui/colors';

export const primary = '#00BCd4'
export const secondary = '#007ac1'

const flex = {
    display: 'flex',
    flex: '1 1 auto'
}

const flexWrap = {
    flexWrap: 'wrap',
}

const flexColumn = {
    ...flex,
    flexDirection: 'column',
}

const center = {
    textAlign: 'center'
}

const actionButton = {
    background: secondary,
    color: 'white',
}

const styles = {
    contrastBackground: {
        background: white,
        color: '#212121'
    },
    contrastForeground: {
        color: white,
    },
    primaryBackground: {
        background: primary,
    },
    primaryForeground: {
        color: primary,
    },
    secondaryBackground: {
        background: secondary,
    },
    secondaryForeground: {
        color: white,
    },
    container: flex,
    mainContainer: {
        ...flex,

        background: primary,
        padding: 60,
        alignItems: 'center',
        alignContent: 'center'
      },
    containerWrap: {
        ...flex,
        ...flexWrap,
        background: primary,
        padding: 60,
        alignItems: 'center',
        alignContent: 'center'
      },
    info: {
        color: white,
        background: primary,
        padding: 16,
        flex: '1 1 50%',
        ...center,
      },
      containerColumn: flexColumn,
      containerColumnWrap: {
        ...flexColumn,
        flexWrap,
        margin: 'auto',
        width: '100%'        
      },
      content: flex,
      actions: {
          marginTop: 16,
          float: 'right'
      },
      action: actionButton,    
      actionFull: {
          ...actionButton,
          width: '100%',
      }
  };

  export default styles;