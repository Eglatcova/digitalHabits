import { useSelector, useDispatch } from "react-redux";

import ActionCreator from "./actions";
import { getContent } from "./selectors";

const useCommon = () => {
  const dispatch = useDispatch();
  const content = useSelector(getContent);

  const setContent = (dirId = 0) => {
    dispatch(ActionCreator.setContent(dirId));
  };

  const deleteContent = (dirId = 0) => {
    dispatch(ActionCreator.deleteContent(dirId));
  };

  return {
    content,
    setContent,
    deleteContent,
  };
};

export { useCommon };
