import React, {useState} from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import FilledInput from '@material-ui/core/FilledInput'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export const RentalForm = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        firstName: '',
    })

    const handleChange = (event: any) => {
        setState({...state, [event.target.id]: event.target.value})
    }

    const handleSubmit = () => {
        console.log('shit')
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <FormControl
                                variant="filled"
                                fullWidth
                                margin={"normal"}>
                                <InputLabel htmlFor="firstName">First Name</InputLabel>
                                <FilledInput
                                    name="firstName"
                                    onChange={handleChange}
                                    id="firstName"
                                    fullWidth />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl
                                variant="filled"
                                fullWidth
                                margin={"normal"}>
                                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                                <FilledInput
                                    name="lastName"
                                    onChange={handleChange}
                                    id="lastName"
                                    fullWidth />
                            </FormControl>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
    )
}
