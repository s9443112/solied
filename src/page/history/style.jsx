



const useStyles = (theme) => ({
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(20),
        minWidth: 200,
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        fontFamily: 'Microsoft JhengHei',
    },
    fixedHeight: {
        height: 300,
    },
    container: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },

    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 200,
        marginLeft: theme.spacing(3),
      },
});


export default useStyles;