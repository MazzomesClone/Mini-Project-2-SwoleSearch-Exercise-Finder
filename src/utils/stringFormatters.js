export const capitalise = str => str.charAt(0).toUpperCase() + str.slice(1);
export const formatOption = str => capitalise(str).split('_').join(' ')