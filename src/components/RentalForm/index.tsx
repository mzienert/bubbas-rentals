import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import FilledInput from '@material-ui/core/FilledInput'
import Grid from '@material-ui/core/Grid';
import DatePicker from '@material-ui/lab/DatePicker';
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
import Checkbox from '@material-ui/core/Checkbox';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from "react-hook-form";
import { abilityLevels, genders, heights, bootSizes, weights } from "../../constants/RentalForm";
import { FormData } from "../../types/RentalForm";
import {useDispatch} from "react-redux";
import {addRider} from "../../redux/actions";

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
    const dispatch = useDispatch();
    const { register, handleSubmit, errors, control } = useForm<FormData>();

    const [value, setValue] = React.useState<Date | null>(null);

    const onSubmit = (data: FormData) => {
        dispatch(addRider(data))
    };

    const valuetext = (value: number) => `${value}lbs`;

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
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <DatePicker
                                disableFuture
                                openTo="year"
                                mask="dd/MM/yyyy"
                                label="Date of birth"
                                views={["year", "month", "date"]}
                                value={value}
                                onChange={(newValue: any) => setValue(newValue)}
                                renderInput={(params) =>
                                    <TextField {...params}
                                        variant="filled"
                                        fullWidth
                                        name="birthdate"
                                        inputRef={
                                            register({
                                                required: 'A birthdate is required',
                                            })
                                        }
                                        error={ errors.birthdate ? true : false }
                                    />
                                }/>
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
                                            {abilityLevels.map(ability => (
                                                <MenuItem value={ability.value}>
                                                    {ability.display}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <FormControl variant="filled"
                                         fullWidth>
                                <InputLabel id="height">Height</InputLabel>
                                <Controller
                                    control={control}
                                    defaultValue=""
                                    name="height"
                                    rules={{ required: 'Height is required'}}
                                    as={
                                        <Select id="height-select" error={errors?.height && !!errors.height.message}>
                                            {heights.map(height => (
                                                <MenuItem value={height.value}>
                                                    {height.display}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <FormControl variant="filled"
                                         fullWidth>
                                <InputLabel id="boot-label">Boot Size</InputLabel>
                                <Controller
                                    control={control}
                                    defaultValue=""
                                    name="bootSize"
                                    rules={{ required: 'Boot size is required'}}
                                    as={
                                        <Select id="boot-select" error={errors?.bootSize && !!errors.bootSize.message}>
                                            {bootSizes.map(bootSize => (
                                                <MenuItem value={bootSize.value}>
                                                    {bootSize.display}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography id="weight" gutterBottom>
                                Weight
                            </Typography>
                            <Slider
                                defaultValue={150}
                                getAriaValueText={valuetext}
                                aria-labelledby="weight"
                                step={5}
                                marks
                                min={50}
                                max={275}
                                valueLabelDisplay="on"
                                />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Stance</FormLabel>
                                <RadioGroup row aria-label="stance" name="stance" defaultValue="regular">
                                    <FormControlLabel value="regular" control={<Radio color="primary" />} label="Regular" />
                                    <FormControlLabel value="goofy" control={<Radio color="primary" />} label="Goofy" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="I have read and agree to the rental waiver."
                                name="waiver"
                                inputRef={register}
                            />

                            <Button
                                variant="contained"
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
