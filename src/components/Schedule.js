import React, { useEffect } from "react";

import { connect, useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  Row
} from "reactstrap";
import {
  onNameChange,
  onOpenBookingModal,
  onPhoneNumberChange,
  onBookTimeSlot,
  onOpenReviewingModal,
  onUpdateTimeSlot,
  onCloseBookingModal,
  onCloseReviewingModal
} from "../actions/ScheduleActions.js";

function Schedule(props) {
  const dispatch = useDispatch();
  
  const handleBookSlot = (e) => {
    if (!!props.contactName && !!props.contactPhone) {
      dispatch(onBookTimeSlot());
    } else {
      alert("All Fields are required");
    }
  };
  useEffect(() => {}, [props]);

  return (
    <>
      <Container className="App">
        <Row>
          {props.timeslots.map((slot) => {
            const { id, startTime, endTime, booked } = slot;
            if (!booked) {
              return (
                <Col
                  style={{ marginTop: 8 }}
                  sm={{ size: 8, offset: 2 }}
                  key={id}
                >
                  <Card body key={id}>
                    <CardTitle tag="h5">{`${startTime} - ${endTime}`}</CardTitle>
                    <Button
                      color="primary"
                      onClick={(event) => {
                        dispatch(onOpenBookingModal(slot));
                      }}
                      data-timeslot-id={id}
                    >
                      Book
                    </Button>
                  </Card>
                </Col>
              );
            }
            return (
              <Col
                style={{ marginTop: 8 }}
                sm={{ size: 8, offset: 2 }}
                key={id}
              >
                <Card body key={id} color="danger" outline>
                  <CardTitle tag="h5">{`${startTime} - ${endTime}`}</CardTitle>
                  <Button
                    color="danger"
                    onClick={() => {
                      dispatch(onOpenReviewingModal(slot));
                    }}
                    data-timeslot-id={id}
                  >
                    Update This Time Slot
                  </Button>
                </Card>
              </Col>
            );
          })}
        </Row>

        <Modal
          isOpen={props.bookingModalStatus === "opened"}
          toggle={props.onCloseBookingModal}
          className="bookingModal"
        >
          <ModalHeader toggle={props.onCloseBookingModal}>
            Please Enter Your Contact Information.
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="contactName">Your Name</Label>
                <Input
                  type="text"
                  name="contactName"
                  id="contactName"
                  required
                  placeholder="First and Last Name"
                  onChange={(event) => {
                    console.log("Value : ", event.target.value);
                    dispatch(onNameChange(event.target.value));
                  }}
                  value={props.contactName}
                />
              </FormGroup>
              <FormGroup>
                <Label for="contactPhone">Your Phone Number</Label>
                <Input
                  type="tel"
                  name="contactPhone"
                  id="contactPhone"
                  placeholder="1-(555)-555-5555"
                  onChange={(event) =>
                    dispatch(onPhoneNumberChange(event.target.value))
                  }
                  value={props.contactPhone}
                />
              </FormGroup>
              <Button color="primary" className="mx-1" onClick={handleBookSlot}>
                Book This Time Slot
              </Button>
              <Button
                color="secondary"
                className="mx-1"
                onClick={() => {
                  dispatch(onCloseBookingModal());
                }}
              >
                Nevermind
              </Button>
            </Form>
          </ModalBody>
        </Modal>

        <Modal
          isOpen={props.reviewingModalStatus === "opened"}
          className="reviewingModal"
        >
          <ModalHeader toggle={props.onCloseReviewingModal}>
            Update Your Contact Information.
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="contactName2">Your Name</Label>
                <Input
                  type="text"
                  name="contactName"
                  id="contactName2"
                  placeholder="First and Last Name"
                  onChange={(event) => {
                    console.log("Value : ", event.target.value);
                    dispatch(onNameChange(event.target.value));
                  }}
                  value={props.contactName}
                />
              </FormGroup>
              <FormGroup>
                <Label for="contactPhone2">Your Phone Number</Label>
                <Input
                  type="tel"
                  name="contactPhone"
                  id="contactPhone2"
                  placeholder="1-(555)-555-5555"
                  onChange={(event) =>
                    dispatch(onPhoneNumberChange(event.target.value))
                  }
                  value={props.contactPhone}
                />
              </FormGroup>
              <Button
                color="primary"
                className="mx-1"
                onClick={() => {
                  dispatch(onUpdateTimeSlot());
                }}
              >
                Save Updates
              </Button>
              <Button
                color="secondary"
                className="mx-1"
                onClick={() => {
                  dispatch(onCloseReviewingModal());
                }}
              >
                Nevermind
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </Container>
    </>
  );
  // }
}

function mapStateToProps(state) {
  return {
    timeslots: state.timeslots,
    bookingModalStatus: state.bookingModalStatus,
    reviewingModalStatus: state.reviewingModalStatus,
    contactName: state.contactName,
    contactPhone: state.contactPhone,
    timeslotID: state.timeslotID
  };
}

export default connect(mapStateToProps)(Schedule);
