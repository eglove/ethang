export const immutableSet = <ObjectType, ValueType>(
  object: ObjectType,
  key: keyof ObjectType,
  value: ValueType
): ObjectType => {
  object = {
    ...object,
    [key]: value,
  };
  return object;
};
