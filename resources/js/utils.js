export function gqlErrors(error) {
    const hasInternal = (errors) => errors.some(e => e.internal);
    const replaceInternal =
        (errors, error) => hasInternal(errors) ?
            errors.filter(e => !e.internal).concat(error)
            :
            errors;
    return replaceInternal((error?.graphQLErrors || []).map(err => ({
        message: err.message,
        internal: Boolean(!(err?.path?.length))
    })), {
        message: 'test'
    });
}
