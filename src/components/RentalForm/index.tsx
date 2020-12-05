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
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from "react-hook-form";
import { abilityLevels, genders } from "../../constants/RentalForm";
import { FormData } from "../../types/RentalForm";

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
        button: {
            margin: theme.spacing(1),
        },
    }),
);



export const RentalForm = () => {
    const classes = useStyles();
    const { register, handleSubmit, errors, control } = useForm<FormData>();

    const [value, setValue] = React.useState<Date | null>(null);

    const onSubmit = (data: FormData) => {
        console.log('deez: ', data);
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <form onSubmit={handleSubmit((data: FormData) => onSubmit(data))}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5">
                                Rider
                            </Typography>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <FormControl variant="filled" fullWidth>
                                <InputLabel htmlFor="firstName">First Name</InputLabel>
                                <FilledInput
                                    name="firstName"
                                    fullWidth
                                    inputRef={
                                        register({
                                            required: 'A first name is required',
                                            maxLength: {
                                                value: 50,
                                                message: 'First name is too long'
                                            },
                                            minLength: {
                                                value: 2,
                                                message: 'First name is too short'
                                            }
                                        })
                                    }
                                    error={ errors.firstName ? true : false } />
                                    {errors?.firstName && errors.firstName.message}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <FormControl variant="filled" fullWidth>
                                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                                <FilledInput
                                    name="lastName"
                                    fullWidth
                                    inputRef={
                                        register({
                                            required: 'A last name is required',
                                            maxLength: {
                                                value: 50,
                                                message: 'Last name is too long'
                                            },
                                            minLength: {
                                                value: 2,
                                                message: 'Last name is too short'
                                            }
                                        })
                                    }
                                    error={ errors.lastName ? true : false } />
                                    {errors?.lastName && errors.lastName.message}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={2}>
                          {/* <MobileDatePicker
                                clearable
                                label="Birthdate"
                                toolbarPlaceholder="Enter Date"
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                renderInput={(props) => <TextField
                                    {...props}
                                    variant="filled"
                                    fullWidth
                                    />} />*/}
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <FormControl
                                variant="filled"
                                fullWidth>
                                <InputLabel htmlFor="gender">gender</InputLabel>
                                <Controller
                                    control={control}
                                    defaultValue=""
                                    name="gender"
                                    rules={{ required: 'Gender is required'}}
                                    as={
                                        <Select id="gender-select" error={errors?.gender && !!errors.gender.message}>
                                            {genders.map(gender => (
                                                <MenuItem value={gender.value}>
                                                    {gender.display}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    }
                                />
                                {errors?.gender && errors.gender.message}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5">
                                Rider Preferences
                            </Typography>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <FormControl variant="filled"
                                fullWidth>
                                <InputLabel id="ability-label">Ability</InputLabel>
                                <Controller
                                    control={control}
                                    defaultValue=""
                                    name="ability"
                                    rules={{ required: 'Ability is required'}}
                                    as={
                                        <Select id="ability-select" error={errors?.ability && !!errors.ability.message}>
                                            {genders.map(ability => (
                                                <MenuItem value={ability.value}>
                                                    {ability.display}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    }
                                />
                                {errors?.ability && errors.ability.message}
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
                        <Grid item xs={12}>
                            <Divider />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={false}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="I have read the Liability Waiver"
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                endIcon={<SaveIcon />}
                                type="submit"
                            >
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </div>
    )
}
