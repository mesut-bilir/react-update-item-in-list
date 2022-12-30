export const setApiData = (data) => {
    return {
      type: 'SET_DATA',
      payload: data
    };
  };

export const editData = (data) => {
    return {
      type: 'EDIT_DATA',
      payload: data
    };
  };
   
