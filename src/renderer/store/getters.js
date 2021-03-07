

const getters = {
    path: state => state.dir.path,
    files: state => state.file.fileList,
    fileMap: state => state.file.fileMap,
}
export default getters
