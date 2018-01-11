export function saveAccountForm({email, password}) {
   return {
       type: 'SAVE_ACCOUNT',
       payload: {email, password}
   }
}

export function submitAccountForm({email, password}) {
    return {
        type: 'SUBMIT_ACCOUNT',
        payload: {email, password}
    }
}

export function saveInitialForm({id, first, middle, phone, last, dob}) {
    return {
        type: 'SAVE_INITIAL',
        payload: {id, first, middle, phone, last, dob}
    }
}

export function saveAddressForm({addressLine1, addressLine2, city, province, postalcode, country}) {
    return {
        type: 'SAVE_ADDRESS',
        payload: {addressLine1, addressLine2, city, province, postalcode, country}
    }
}

export function saveIdentityForm({sin, idNumber, idtype, idExpiry}) {
    return {
        type: 'SAVE_IDENTITY',
        payload: {sin, idNumber, idtype, idExpiry}
    }
}

export function submitSignUp({id, first, middle, phone, last, dob, addressLine1, addressLine2, city, province, postalcode, country, sin, idNumber, idtype, idExpiry}) {
    return {
        type: 'SUBMIT_SIGNUP',
        payload: {id, first, middle, phone, last, dob, addressLine1, addressLine2, city, province, postalcode, country, sin, idNumber, idtype, idExpiry}
    }
}

export function submitDocument() {
    return {
        type: 'SUBMIT_DOCUMENT',
        payload: {} // TODO
    }
}