export const REGEX = {
    EMAIL: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    LOWER_AND_UPPER_CASE: /^(?!\s)(?!.*\s$)(?!.*?(\s)\1)(?=.*?[A-Z])(?=.*?[a-z]).+$/,
    AT_LEAST_ONE_NUMBER: /\d/,
    AT_LEAST_ONE_SPECIAL_CHARACTER: /(?=.*[!@#$%^&*()_+\-=,.;:'"[\]{}|`~<>?\\/])/,
    MIN_LENGTH: (length) => new RegExp(`^.{${length}}`),
    TEL: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
    URL: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
}

