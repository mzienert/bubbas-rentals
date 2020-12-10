import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/reducers"
import { RiderList } from '../RiderList'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            textAlign: 'center',
            paddingTop: '10px'
        },
    }),
)

export const Cart = () => {
    const classes = useStyles()
    const riders = useSelector((state: RootState) => state.riders.data)

    return (
        <div className={classes.root}>
            {!riders.length && <p>No riders have been added yet.</p>}
            {riders.length > 0 && <RiderList riders={riders} />}
        </div>
    )
}
