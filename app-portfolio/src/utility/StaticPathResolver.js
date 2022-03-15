export const resolveStaticPath = (path) => {
    return path[0] === '/' ? `.${path}` : path;
}