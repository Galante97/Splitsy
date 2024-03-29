import cloneDeep from "lodash.clonedeep";


type MapperFn<From, To> = (fromObj: From) => To;

export const deepClone = <T>(obj: T) => {
    return cloneDeep(obj) as T;
}

export const deepCloneMapper = <From, To = From>(fromObj: From, mapper: MapperFn<From, To>): To => {
    const fromObjCloned = deepClone(fromObj);

    return mapper(fromObjCloned);
}