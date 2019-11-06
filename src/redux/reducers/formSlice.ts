import { createSlice, PayloadAction } from "redux-starter-kit";
import { AppThunk } from "redux/store";

const initialState = {};

interface IUpdateNameTodo {
  id: any;
  name: string;
}

interface IToggleTodo {
  id: string;
  complete: boolean;
}

interface IDeleteTodo {
  id: string;
}

interface UserInfo {
  name: string;
}

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeForm(state, action: PayloadAction<any>) {
      console.log(state);
      return [...action.payload];
    },
    updateNameTodo(state, action: PayloadAction<IUpdateNameTodo>) {},
    toggleTodo(state, action: PayloadAction<IToggleTodo>) {},
    deleteTodo(state, action: PayloadAction<IDeleteTodo>) {},
    getRepoDetailsSuccess(state, action: PayloadAction<UserInfo>) {}
  }
});

export const {
  changeForm,
  updateNameTodo,
  getRepoDetailsSuccess,
  toggleTodo,
  deleteTodo
} = formSlice.actions;

export default formSlice.reducer;

const getRepoDetails = org => {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "mama"
      });
    }, 1000);
  });
};

export const fetchIssuesCount = (org: any): AppThunk => async dispatch => {
  try {
    const repoDetails = await getRepoDetails(org);
    dispatch(getRepoDetailsSuccess(repoDetails));
  } catch (err) {}
};
