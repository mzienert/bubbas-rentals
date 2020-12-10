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

export type RentalFormData = {
    firstName: string
    lastName: string
    gender: string
    ability: string
    stance: string
    waiver: any
    height: string
    bootSize: string
    birthdate: any
}
