import Data from "../components/TimeSlots";
import Schedule from "../components/Schedule";

import {
  closeBookingModal,
  bookTimeSlot,
  closeReviewingModal,
  inputChange,
  openReviewingModal,
  openBookingModal,
  onUpdateSlot,
  CHANGE_NAME
} from "./../actions/ScheduleActions";

const initialState = {
  timeslots: Data,
  bookingModalStatus: "closed",
  reviewingModalStatus: "closed",
  contactName: "",
  contactPhone: "",
  timeslotID: 0
};

export const ScheduleReducer = (state = initialState, action) => {
  console.log("reducer running", action);
  switch (action.type) {
    case "CHANGE_PHONE_NUMBER":
      return { ...state, contactPhone: action.payload };
    case CHANGE_NAME:
      return { ...state, contactName: action.payload };
    case "bookTimeSlot":
      return {
        ...state,
        bookingModalStatus: "closed",
        reviewingModalStatus: "closed",
        timeslots: state.timeslots.map((timeslot) => {
          if (timeslot.id !== state.timeslotID) {
            return timeslot;
          }
          return {
            ...timeslot,
            booked: true,
            contactName: state.contactName,
            contactPhone: state.contactPhone
          };
        })
      };
    case "closeBookingModal":
      return {
        ...state,
        bookingModalStatus: "closed",
        timeslotID: null,
        contactName: "",
        contactPhone: ""
      };
    case "openBookingModal":
      // console.log(action.payload, "redddddd");
      return {
        ...state,
        contactName: "",
        contactPhone: "",
        bookingModalStatus: "opened",
        timeslotID: action.payload
      };
    case "closeReviewingModal":
      return {
        ...state,
        reviewingModalStatus: "closed",
        timeslotID: null,
        contactName: "",
        contactPhone: ""
      };
    case "openReviewingModal":
      const { contactName, contactPhone } = state.timeslots.find(
        ({ id }) => id === action.payload
      ) || { contactName: state.contactName, contactPhone: state.contactPhone };
      return {
        ...state,
        reviewingModalStatus: "opened",
        timeslotID: action.payload,
        contactName,
        contactPhone
      };
    default:
      return state;
  }
};
export default ScheduleReducer;