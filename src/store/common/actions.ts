import { getContent, DELETE_CONTENT } from "./action-type";

const ActionCreator = {
  setContent: (dirId: number) => getContent(dirId),
  deleteContent: (dirId: number) => ({
    type: DELETE_CONTENT,
    payload: dirId,
  }),
};

export default ActionCreator;
