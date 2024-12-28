// Import Dependencies
import axios from 'axios';
import { toast } from 'react-toastify';
import { routes } from '../../contant';

const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
const GET_STATES_REQUEST = 'GET_STATES_REQUEST';
const GET_STATES_SUCCESS = 'GET_STATES_SUCCESS';

const GET_ACTIVITY_POINTS_SUCCESS = 'GET_POINST_SUCCESS';

const GET_POINTS_HISTORY_SUCCESS = 'GET_POINST_HISTORY_SUCCESS';

const API_BASE_URL = 'http://localhost:3000';

export const addRequest = (data) => async (dispatch) => {
  console.log(data, 'data');
  try {
    const token = localStorage.getItem('token'); // Replace with how you store/retrieve the token

    const response = await axios.post(`${API_BASE_URL}/request/add`, data, {
      headers: {
        Authorization: `Bearer ${token}`, // Add your token here
      },
    });

    if (response) {
      toast.success(response?.data?.message || 'Your Request has been created');
    }
    return response;
  } catch (error) {
    toast.error(error.response?.data?.message || error.message);
    return error;
  }
};

export const fetchStates = (userId) => async (dispatch) => {
  dispatch({ type: GET_STATES_REQUEST }); // Dispatching request action
  try {
    const token = localStorage.getItem('token'); // Replace with your token retrieval logic
    const response = await axios.get(
      `${API_BASE_URL}/request/states/?userId=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data) {
      dispatch({ type: GET_STATES_SUCCESS, payload: response.data?.data });
    }
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || error.message);
    return error;
  }
};

export const getMyActivityPoints = (userId) => async (dispatch) => {
  dispatch({ type: GET_STATES_REQUEST }); // Dispatching request action
  try {
    const token = localStorage.getItem('token'); // Replace with your token retrieval logic
    const response = await axios.get(
      `${API_BASE_URL}/request/get-activity-point/?userId=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data) {
      dispatch({
        type: GET_ACTIVITY_POINTS_SUCCESS,
        payload: response.data?.data,
      });
    }
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || error.message);
    return error;
  }
};

export const getMyActivityHistory = (userId, obj) => async (dispatch) => {
  console.log('response', 'hhh9999999999999999999999999');

  try {
    const token = localStorage.getItem('token'); // Replace with your token retrieval logic

    // Convert the `obj` to query parameters
    const params = new URLSearchParams({
      userId,
      startDate: obj.startDate,
      endDate: obj.endDate,
    }).toString();

    let config = {
      method: 'get',
      url: `http://localhost:3000/request/activity-point-history?${params}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    // Execute Axios request
    const response = await axios.request(config);

    console.log(JSON.stringify(response.data), 'hhh9999999999999999999999999');

    // Dispatch action if data is present
    if (response.data) {
      dispatch({
        type: GET_POINTS_HISTORY_SUCCESS,
        payload: response.data?.data,
      });
    }

    return response.data;
  } catch (error) {
    // Handle errors
    console.error(error);
    toast.error(error.response?.data?.message || error.message);
    return error;
  }
};



