import React, { useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import FilledInput from '@material-ui/core/FilledInput'
import Grid from '@material-ui/core/Grid';
import { MobileDatePicker, DatePicker, TimePicker, DateTimePicker, LocalizationProvider } from '@material-ui/pickers'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/core/Slider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'left',
            color: theme.palette.text.secondary,
        },
    }),
);

interface AbilityLevels {
    value: string,
    display: string,
}

interface Genders {
    value: string,
    display: string
}
export const RentalForm = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
    })

    const [value, setValue] = React.useState<Date | null>(null);

    const handleChange = (event: any) => {
        setState({...state, [event.target.id]: event.target.value})
    }

    const handleSubmit = () => {
        console.log('shit')
    }

    const abilityLevels: AbilityLevels[] = [
        {value: 'beginner', display: 'Beginner'},
        {value: 'intermediate', display: 'Intermediate'},
        {value: 'advanced', display: 'Advanced'},
        {value: 'expert', display: 'Expert'},
    ]

    const genders: Genders[] = [
        {value: 'female', display: 'Female'},
        {value: 'male', display: 'Male'},
        {value: '?', display: '???'},
    ]

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5">
                                Rider
                            </Typography>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <FormControl
                                variant="filled"
                                fullWidth>
                                <InputLabel htmlFor="firstName">First Name</InputLabel>
                                <FilledInput
                                    name="firstName"
                                    onChange={handleChange}
                                    id="firstName"
                                    fullWidth />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <FormControl
                                variant="filled"
                                fullWidth>
                                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                                <FilledInput
                                    name="lastName"
                                    onChange={handleChange}
                                    id="lastName"
                                    fullWidth />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <MobileDatePicker
                                clearable
                                label="Birthdate"
                                toolbarPlaceholder="Enter Date"
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                renderInput={(props) => <TextField {...props} variant="filled" fullWidth />}
                            />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <FormControl
                                variant="filled"
                                fullWidth>
                                <InputLabel id="gender-label">Gender</InputLabel>
                                <Select
                                    labelId="gender-label"
                                    id="gender"
                                    value=""
                                    onChange={handleChange}
                                    fullWidth
                                >
                                    {genders.map(gender => (
                                        <MenuItem value={gender.value}>{gender.display}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5">
                                Rider Preferences
                            </Typography>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <FormControl
                                variant="filled"
                                fullWidth>
                                <InputLabel id="ability-label">Ability</InputLabel>
                                <Select
                                    labelId="ability-label"
                                    id="ability"
                                    value=""
                                    onChange={handleChange}
                                    fullWidth
                                >
                                    {abilityLevels.map(abilityLevel => (
                                        <MenuItem value={abilityLevel.value}>{abilityLevel.display}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Typography id="boot-slider" gutterBottom>
                                Boot Size
                            </Typography>
                            <Slider
                                defaultValue={9}
                                aria-labelledby="boot-slider"
                                valueLabelDisplay="auto"
                                step={0.5}
                                marks
                                min={5}
                                max={13}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography id="height-slider" gutterBottom>
                                 Height
                            </Typography>
                            <Slider
                                defaultValue={30}
                                aria-labelledby="height-slider"
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={10}
                                max={110}
                            />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Typography id="weight-slider" gutterBottom>
                                Weight
                            </Typography>
                            <Slider
                                defaultValue={30}
                                aria-labelledby="weight-slider"
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={10}
                                max={110}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Stance</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                    <FormControlLabel value="regular" control={<Radio color="primary" />} label="Regular" />
                                    <FormControlLabel value="goofy" control={<Radio color="primary" />} label="Goofy" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
    )
}
