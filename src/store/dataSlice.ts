import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BASE_URL, DataType } from "../models/models"

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (path: string, {rejectWithValue}) => {
    try {
      const response = await fetch(`${BASE_URL}/${path}`)
      if (!response.ok) {
        throw new Error("Server error")
      }
      const data = await response.json()
      return data
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

export const deleteItem = createAsyncThunk(
  'data/deleteItem',
  async ({ path, id }: { path: string, id: number }, { rejectWithValue, dispatch }) => {
    try {
      if (window.confirm('Are you sure you want to delete this item?')) {
        const response = await fetch(`${BASE_URL}/${path}/${id}`, {
          method: 'DELETE'
        })
        if (!response.ok) {
          throw new Error("Cant delete item. Server Error.")
        }
        dispatch(removeItem(id))
      }
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  data: [] as DataType[],
  status: "idle",
  error: null,
}

const dataSlice = createSlice({
  name: "data",
  initialState,

  reducers: {
    removeItem: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter(item => item.id !== action.payload);
    },
  },

  extraReducers: {
    [fetchData.pending.type]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchData.fulfilled.type]: (state, action) => {
      state.status = 'resolved '
      state.data = action.payload
      
    },
    [fetchData.rejected.type]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [deleteItem.pending.type]: (tate, action) => {
      tate.status = 'rejected'
      tate.error = action.payload
    },
  },
})


export const { removeItem } = dataSlice.actions;
export default dataSlice.reducer;
