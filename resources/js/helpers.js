function isEmptyObject(obj) {
    return Object.values(obj).every(field => field.trim() === "");
}

export default isEmptyObject;
