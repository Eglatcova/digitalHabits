import { IChildren } from "../data-types";

const addChildren = (stateContent: IChildren, id: number, child: IChildren) => {
  const { children } = stateContent;
  if (!children) return;
  const childI = children.findIndex((child: IChildren) => child.id === id);
  if (childI >= 0) {
    children[childI] = child;
  } else {
    children.forEach((childForce: IChildren) => {
      addChildren(childForce, id, child);
    });
  }
  return stateContent;
};

const deleteChildren = (stateContent: IChildren, id: number) => {
  const { children } = stateContent;
  if (!children) return;
  const childI = children.findIndex((child: IChildren) => child.id === id);
  if (childI >= 0) {
    children[childI].children = [];
  } else {
    children.forEach((childForce: IChildren) => {
      deleteChildren(childForce, id);
    });
  }
  return stateContent;
};

export { addChildren, deleteChildren };
