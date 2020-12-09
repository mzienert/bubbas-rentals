export interface AbilityLevels {
    value: string,
    display: string,
}

export interface Genders {
    value: string,
    display: string
}

export interface Heights {
    value: string,
    display: string
}

export interface BootSizes {
    value: string,
    display: string
}

export interface Weights {
    value: number,
    label: string
}

export type FormData = {
    firstName: string
    lastName: string
    gender: string
    ability: string
    stance: string
    waiver: any
    height: string
    bootSize: string
    birthdate: any
};
