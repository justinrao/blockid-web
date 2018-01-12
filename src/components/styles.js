import {white} from 'material-ui/colors';

export const primary = '#00BCd4'
export const secondary = '#007ac1'

export const contrastGrey = '#dedede'

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
    left: {
        textAlign: 'left'
    },
    contrastForeground: {
        color: white,
    },
    primaryBackground: {
        background: primary,
    },
    primary: {
        background: primary,
        color: white
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
    contrastGrey: {
        background: contrastGrey,
        padding: 24
    },
    container: flex,
    mainContainer: {
        ...flex,

        background: primary,
        padding: 64,
        alignItems: 'center',
        alignContent: 'center'
      },
    containerWrap: {
        ...flex,
        ...flexWrap,
        paddingTop: 32,
        paddingLeft: 32,
        paddingRight: 32,
        alignItems: 'center',
        alignContent: 'center'
      },
    info: {
        padding: 16,
        flex: '1 1 auto',
      },
    main: {
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