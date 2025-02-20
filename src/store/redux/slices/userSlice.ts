// slices/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';

interface UserState {
  name: string;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  name: '',
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setName, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;

// Async Thunk Example
export const fetchUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    // Simulate API call
    const response = await new Promise<{ name: string }>((resolve) =>
      setTimeout(() => resolve({ name: 'John Doe' }), 1000)
    );
    dispatch(setName(response.name));
  } catch (error: unknown) {
    console.error(error);
    dispatch(setError('Failed to fetch user'));
  } finally {
    dispatch(setLoading(false));
  }
};
