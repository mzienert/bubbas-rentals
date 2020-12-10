import React from "react";

export const RiderList = (props: any) => {
    const { riders } = props

    return (
        <div>
            { riders.map((rider: any) => (
                <p>{rider.firstName}</p>
            ))}
        </div>
    )
}
