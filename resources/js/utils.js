export function gqlErrors(error) {
    const hasInternal = (errors) => errors.some(e => e.internal);
    const replaceInternal =
        (errors, error) => hasInternal(errors) ?
            errors.filter(e => !e.internal).concat(error)
            :
            errors;
    return replaceInternal((error?.graphQLErrors || []).map(err => {
        if ("validation" === err.extensions?.category) {
            const validationErrors = err.extensions?.validation || {};
            return Object.keys(validationErrors).map(key => validationErrors[key]).flat().map(validation => ({
                message: validation,
                internal: false
            }));
        }
        return {
            message: err.message,
            internal: Boolean(!(err?.path?.length))
        }
    }), {
        message: 'test'
    }).flat();
}
