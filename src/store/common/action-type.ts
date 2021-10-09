export const GET_CONTENT_SUCCESS = "GET_CONTENT_SUCCESS";

export const DELETE_CONTENT = "DELETE_CONTENT";

const URL = "http://164.90.161.80:3000/api/content";

export const getContent = (dirId: number) => async (dispatch: any) => {
  const queryId = dirId === 0 ? "" : `?dirId=${dirId}`;
  const response = await fetch(`${URL}${queryId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }).catch((e) => {
    alert("error");
  });

  if (response?.ok) {
    const data = await response.json();
    dispatch({
      type: GET_CONTENT_SUCCESS,
      payload: data,
    });
  } else {
    alert("error");
  }
};
