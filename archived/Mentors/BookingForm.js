import Modal from "../../components/Modal/Modal";
import Link from "next/link";
import { Oval } from "react-loader-spinner";
import { useEffect, useState } from "react";
import PageLoading from "../../components/PageLoading/PageLoading";

const BookingForm = () => {
  const initialBookingDataState = {
    bookingMentor: "",
    bookingDate: "",
    bookingSlot: "",
    firstName: "",
    lastName: "",
    nickname: "",
    contactNum: "",
    email: "",
    message: "",
  };
  // duplication checking
  const [duplicateTextHelper, setDuplicateTextHelper] = useState("");
  const [duplicateFetching, setDuplicateFetching] = useState(false);
  const [isBookingMentorFilled, setBookingMentor] = useState(false);
  const [isBookingEmailFilled, setBookingEmail] = useState(false);
  const [isBookingDateFilled, setBookingDate] = useState(false);
  const [isBookingSlotFilled, setBookingSlot] = useState(false);
  const [isFormDataChanged, setFormData] = useState(false);
  const [isFormValid, setFormValidity] = useState(false);
  const [cancelToken, setCancelToken] = useState(undefined);
  const [errorToggle, errorToggleModal] = useState(false);

  // BINDED TO DROPDOWN MENTOR NAME
  const [mentorIndex, setMentorIndex] = useState(-1);

  // modal open close
  const [toggle, toggleModal] = useState(false);

  // loading
  const [applicationSending, setApplicationSending] = useState(false);

  const [bookingData, setBookingData] = useState(initialBookingDataState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      setApplicationSending(true);
      window.scrollTo({ top: 0, behavior: "smooth" });

      // clearing form values
      setMentorIndex(-1);
      setBookingData(initialBookingDataState);

      //console.log("FORM SUBMITTED");
      //console.log(e.target[0].value);
      try {
        const res = await axios.post("/api/addMentorshipBooking", bookingData);
        setApplicationSending(false);
        setBookingData(initialBookingDataState);
        if (res.status === 201) {
          router.push("?status=success", undefined, { shallow: true });
          toggleModal(true);
        } else {
          router.push("?status=fail", undefined, { shallow: true });
          errorToggleModal(true);
        }
      } catch (e) {
        setApplicationSending(false);
        errorToggleModal(true);
        router.push("?status=fail", undefined, { shallow: true });
      }
    }
  };

  const handleMousemove = async (e) => {
    if (
      isBookingDateFilled &&
      isBookingEmailFilled &&
      isBookingMentorFilled &&
      isBookingSlotFilled &&
      isFormDataChanged &&
      !applicationSending
    ) {
      // cancelMentorshipCheck();
      // setCancelToken(axios.CancelToken.source())

      setFormData(false);
      setDuplicateFetching(true);
      console.log("asd");
      try {
        const res = await axios.get("/api/getMentorshipDetails", bookingData);
        setDuplicateFetching(false);
        const key = {
          email: bookingData.email,
          mentor: bookingData.bookingMentor,
          date: bookingData.bookingDate + " " + bookingData.bookingSlot,
        };

        let invalid = mentorshipInstanceExists(res.data, key);
        setFormValidity(!invalid);
        //   const invalid = res.data.includes(key)
        // console.log(invalid);
        // console.log(key.email);
        console.log(res.data);
        //console.log(invalid);
        if (invalid) {
          setDuplicateTextHelper(
            `You have already booked ${bookingData.bookingMentor} on ${
              bookingData.bookingDate + " " + bookingData.bookingSlot
            }.`
          );
        } else {
          setDuplicateTextHelper("");
        }
      } catch (e) {
        console.log(e.message);
      }
    }
  };
  return (
    <section>
      {applicationSending ? <PageLoading /> : null}

      <section className="px-4 sm:px-8 lg:px-32 py-2 mt-36 mb-16 lg:mb-36 justify-center lg:justify-between items-left h-auto">
        {/* Header */}
        <div className="pb-2">
          <h1
            id="book-mentor-header"
            className=" text-3xl lg:text-5xl mb-6 lg:mb-12"
          >
            Book a Mentor
          </h1>
        </div>

        {/* Form */}
        <form
          action="POST"
          onSubmit={handleSubmit}
          onMouseMove={handleMousemove}
        >
          <section className="flex flex-col xl:flex-row justify-between mb-8">
            {/* Left Side starts here */}
            <div className="w-full pr-0 xl:pr-4">
              <div className="grid grid-cols-12 gap-4">
                {/* Mentor to Book */}
                <div className="col-start-1 col-span-12 sm:col-span-6 mb-0 md:mb-4">
                  <label className="block mb-6" htmlFor="bookingMentor">
                    Mentor to Book
                  </label>
                  <select
                    name="bookingMentor"
                    className="py-2.5 px-2 w-full"
                    style={{ backgroundColor: "#ECECEC" }}
                    onChange={(e) => {
                      setMentorIndex(parseInt(e.target.value));
                      setBookingData({
                        ...bookingData,
                        bookingMentor: mentors[parseInt(e.target.value)].name,
                        bookingDate: "",
                        bookingSlot: "",
                      });
                      // cancelMentorshipCheck();
                      setFormData(true);
                      setDuplicateTextHelper("");
                    }}
                    onBlur={async (e) => {
                      bookingData.bookingMentor !== ""
                        ? setBookingMentor(true)
                        : setBookingMentor(false);
                    }}
                    value={mentorIndex}
                    required
                  >
                    <option value={-1} disabled selected>
                      Please select a mentor
                    </option>

                    {mentors.map((item, index) => {
                      // Index = 0 to N
                      return (
                        <option value={index} key={index}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                {/* Date & Time */}
                <div className="col-span-12 sm:col-span-6 mb-4">
                  <label className="block mb-6" htmlFor="bookingDate">
                    Date and Time
                  </label>
                  {/* Date */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-start-1">
                      <select
                        name="bookingDate"
                        className="py-2.5 px-1.5 w-full"
                        style={{ backgroundColor: "#ECECEC" }}
                        onChange={(e) => {
                          setBookingData({
                            ...bookingData,
                            bookingDate: e.target.value,
                            bookingSlot: "",
                          });
                          // cancelMentorshipCheck();
                          setFormData(true);
                          setDuplicateTextHelper("");
                        }}
                        onBlur={async (e) => {
                          bookingData.bookingDate !== ""
                            ? setBookingDate(true)
                            : setBookingDate(false);
                        }}
                        value={bookingData.bookingDate}
                        required
                      >
                        <option value="" disabled selected>
                          Date
                        </option>
                        {mentorIndex !== -1
                          ? getNextNDays(mentors[mentorIndex].timeSlots).map(
                              (item, index) => {
                                return (
                                  <option value={item} key={index}>
                                    {item}
                                  </option>
                                );
                              }
                            )
                          : null}
                      </select>
                    </div>

                    {/* Time */}
                    <div className="col-start-2">
                      <select
                        name="bookingSlot"
                        className="py-2.5 px-2 w-full"
                        style={{ backgroundColor: "#ECECEC" }}
                        onChange={(e) => {
                          setBookingData({
                            ...bookingData,
                            bookingSlot: e.target.value,
                          });
                          // cancelMentorshipCheck();
                          setFormData(true);
                          setDuplicateTextHelper("");
                        }}
                        onBlur={async (e) => {
                          bookingData.bookingSlot !== ""
                            ? setBookingSlot(true)
                            : setBookingSlot(false);
                        }}
                        value={bookingData.bookingSlot}
                        required
                      >
                        <option value="" disabled selected>
                          Timeslot
                        </option>
                        {mentorIndex !== -1
                          ? getTimeSlotsByDay(
                              mentors[mentorIndex].timeSlots,
                              bookingData.bookingDate
                            ).map((item, index) => {
                              return (
                                <option value={item} key={index}>
                                  {item}
                                </option>
                              );
                            })
                          : null}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4">
                {/* First Name */}
                <div className="col-start-1 col-span-12 sm:col-span-6 mb-0 md:mb-4">
                  <label className="block mb-6" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-input py-2 px-3 w-full"
                    placeholder="Donald Arthur"
                    value={bookingData.firstName}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        firstName: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                {/* Last Name */}
                <div className="col-span-12 sm:col-span-6 mb-4">
                  <label className="block mb-6" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-input py-2 px-3 w-full"
                    placeholder="Norman"
                    value={bookingData.lastName}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        lastName: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4">
                {/* Nickname */}
                <div className="col-start-1 col-span-12 sm:col-span-6 mb-0 md:mb-4">
                  <label className="block mb-6" htmlFor="nickname">
                    Nickname (optional)
                  </label>
                  <input
                    type="text"
                    name="nickname"
                    className="form-input py-2 px-3 w-full"
                    placeholder="Don"
                    value={bookingData.nickname}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        nickname: e.target.value,
                      })
                    }
                  />
                </div>

                {/* Phone Number */}
                <div className="col-span-12 sm:col-span-6 mb-4">
                  <label className="block mb-6" htmlFor="contactNum">
                    Phone Number (optional)
                  </label>
                  <input
                    type="text"
                    name="contactNum"
                    pattern="^(09|639)\d{9}$"
                    className="form-input py-2 px-3 w-full"
                    placeholder="63xxxxxxxxx"
                    value={bookingData.contactNum}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        contactNum: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="col-start-1 col-span-12 sm:col-span-6 mb-4 xl:mb-0">
                {/* Email */}
                <label className="block mb-6" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-input py-2 px-3 w-full"
                  placeholder="don_norman@dlsu.edu.ph"
                  onChange={(e) => {
                    setBookingData({
                      ...bookingData,
                      email: e.target.value,
                    });
                    // cancelMentorshipCheck();

                    setDuplicateTextHelper("");
                    setDuplicateFetching(false);
                    setFormData(true);
                  }}
                  value={bookingData.email}
                  required
                  onBlur={async (e) => {
                    bookingData.email !== ""
                      ? setBookingEmail(true)
                      : setBookingEmail(false);
                  }}
                />
              </div>
            </div>

            {/* Right Side starts here */}
            <div className="flex flex-col w-full xl:w-1/2">
              {/* Additional Message */}
              <label className="block mb-6" htmlFor="message">
                Additional message (optional)
              </label>
              <textarea
                name="message"
                className="h-full p-2"
                placeholder=""
                onChange={(e) =>
                  setBookingData({
                    ...bookingData,
                    message: e.target.value,
                  })
                }
                value={bookingData.message}
              ></textarea>
            </div>
          </section>
          {/* Submit Button */}
          <div className="text-center">
            <p className="pb-4 text-center text-base lg:text-lg 2xl:text-xl">
              All information will be kept private.
            </p>
            <span>
              {duplicateFetching ? (
                <div className="flex justify-center align-center mb-4">
                  <Oval color="gray" height={24} width={24} />
                </div>
              ) : (
                <span className="text-red-500 text-sm h-16 w-full block">
                  {duplicateTextHelper}
                </span>
              )}
              <input
                id={"book-btn"}
                type={"submit"}
                value={"BOOK MENTOR"}
                className={`font-bold inline-block text-center py-4 px-12 h-14 max-h-14 h-auto rounded-md w-full sm:w-auto text-white bg-green cursor-pointer`}
              />
            </span>
          </div>
        </form>
      </section>
      <Modal
        title={"Application Successful"}
        toggleModal={toggleModal}
        toggle={toggle}
      >
        Thank you for booking a mentor! We will reach out to you via email about
        your schedule once we have processed your booking.
      </Modal>
      <Modal
        title={"Something Went Wrong!"}
        toggleModal={errorToggleModal}
        toggle={errorToggle}
      >
        It looks like we are having issues processing your application. Please
        try again later. If this problem persists, you may try contacting us
        through our email at{" "}
        <Link href={"mailto:info@uxsocietytaft.org"}>
          <a className="text-blue-500">info@uxsocietytaft.org</a>
        </Link>
        .
      </Modal>
    </section>
  );
};

export default BookingForm;
