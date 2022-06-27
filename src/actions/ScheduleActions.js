import { dispatch } from "react-redux";
export const closeBookingModal = "closeBookingModal";
export const bookTimeSlot = "bookTimeSlot";
export const closeReviewingModal = "closeReviewingModal";
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_PHONE_NUMBER = "CHANGE_PHONE_NUMBER";
export const openReviewingModal = "openReviewingModal";
export const openBookingModal = "openBookingModal";
export const onUpdateSlot = "onUpdateSlot";

console.log("action is working");

export function onCloseBookingModal(e) {
  return { type: "closeBookingModal" };
}
export function onOpenBookingModal(slot) {
  return { type: "openBookingModal", payload: slot.id };
}

export function onOpenReviewingModal(slot) {
  return { type: "openReviewingModal", payload: slot.id };
}
export function onCloseReviewingModal() {
  return { type: "closeReviewingModal" };
}
export function onNameChange(value) {
  console.log("Values : ", value);
  return {
    type: "CHANGE_NAME",
    payload: value
  };
}
export function onPhoneNumberChange(value) {
  return {
    type: "CHANGE_PHONE_NUMBER",
    payload: value
  };
}
export function onBookTimeSlot(e) {
  return {
    type: "bookTimeSlot"
  };
}
export function onUpdateTimeSlot() {
    return {
        type: "bookTimeSlot"
    };
}