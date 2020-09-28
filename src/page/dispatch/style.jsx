



const useStyles = (theme) => ({
    button: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        fontFamily: 'Microsoft JhengHei',
        height: 600
    },
    Dispatchpaper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        fontFamily: 'Microsoft JhengHei',
        height: 400
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
        minWidth: 350,
    },

    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper2: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
});


export default useStyles;