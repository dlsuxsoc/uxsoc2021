import { create } from "zustand";
import { persist } from "zustand/middleware";

// const now = new Date();
// const expires = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

export const leadApplicationDataStore = create(
  persist(
    (set) => ({
      initialApplicationData: {
        firstName: "",
        lastName: "",
        nickname: "",
        birthdate: {
          month: null,
          date: null,
          year: null,
        },
        pronoun: "",
        customPronoun: "",
        email: "",
        contactnum: "",
        college: "",
        program: "",
        hobbies: "",
        whatIsUX: "",
        practicalityUX: "",
        studentID: "",
        interestedOrg: "",
        interestedDept: [],
        emails: [],
      },
      applicationData: {
        firstName: "",
        lastName: "",
        nickname: "",
        birthdate: {
          month: null,
          date: null,
          year: null,
        },
        pronoun: "",
        customPronoun: "",
        email: "",
        contactnum: "",
        college: "",
        program: "",
        hobbies: "",
        whatIsUX: "",
        practicalityUX: "",
        studentID: "",
        interestedOrg: "",
        interestedDept: [],
        emails: [],
      },
      statusText: {
        firstName: "",
        email: "",
        contactnum: "",
      },
      checkedDept: {
        "Development": false,
        "Externals": false,
        "Internal Growth": false,
        "Community Manager": false,
      },

      emailTextHelper: "",
      numberTextHelper: "",
      deptTextHelper: "",
      maxDate: "",
      emailFetching: false,
      applicationSending: false,

      setApplicationData: (appData) =>
        set((state) => ({ applicationData: appData })),

      setStatusText: (statusData) =>
        set((state) => ({ statusText: statusData })),

      setCheckedDept: (deptData) => set((state) => ({ checkedDept: deptData })),

      setEmailTextHelper: (emailHelper) =>
        set((state) => ({ emailTextHelper: emailHelper })),

      setNumberTextHelper: (numberHelper) =>
        set((state) => ({ numberTextHelper: numberHelper })),

      setDeptTextHelper: (deptHelper) =>
        set((state) => ({ deptTextHelper: deptHelper })),

      setMaxDate: (mDate) => set((state) => ({ maxDate: mDate })),

      setEmailFetching: (eFetching) =>
        set((state) => ({ emailFetching: eFetching })),

      setApplicationSending: (appSending) =>
        set((state) => ({ applicationSending: appSending })),
    }),
    {
      name: "UXSOC_LEADS",
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).map(([key, value]) => [
            key,
            value === null || value === "" ? "" : value,
          ])
        ),
    //  getStorage: () => Cookies,
    //  setStorage: (key, value) => Cookies.set(key, value),
    }
  )
);

export const memberApplicationDataStore = create(
  persist(
    (set) => ({
      initialApplicationData: {
        firstName: "",
        lastName: "",
        nickname: "",
        birthdate: {
          month: null,
          date: null,
          year: null,
        },
        pronoun: "",
        customPronoun: "",
        email: "",
        contactnum: "",
        college: "",
        program: "",
        hobbies: "",
        whatIsUX: "",
        practicalityUX: "",
        studentID: "",
        interestedOrg: "",
        interestedDept: [],
        emails: [],
      },
      applicationData: {
        firstName: "",
        lastName: "",
        nickname: "",
        birthdate: {
          month: null,
          date: null,
          year: null,
        },
        pronoun: "",
        customPronoun: "",
        email: "",
        contactnum: "",
        college: "",
        program: "",
        hobbies: "",
        whatIsUX: "",
        practicalityUX: "",
        studentID: "",
        interestedOrg: "",
        interestedDept: [],
        emails: [],
      },
      statusText: {
        firstName: "",
        email: "",
        contactnum: "",
      },
      checkedDept: {
        Design: false,
        Development: false,
        Externals: false,
        "Internal Growth": false,
        Marketing: false,
        Research: false,
      },

      emailTextHelper: "",
      numberTextHelper: "",
      deptTextHelper: "",
      maxDate: "",
      emailFetching: false,
      applicationSending: false,

      setApplicationData: (appData) =>
        set((state) => ({ applicationData: appData })),

      setStatusText: (statusData) =>
        set((state) => ({ statusText: statusData })),

      setCheckedDept: (deptData) => set((state) => ({ checkedDept: deptData })),

      setEmailTextHelper: (emailHelper) =>
        set((state) => ({ emailTextHelper: emailHelper })),

      setNumberTextHelper: (numberHelper) =>
        set((state) => ({ numberTextHelper: numberHelper })),

      setDeptTextHelper: (deptHelper) =>
        set((state) => ({ deptTextHelper: deptHelper })),

      setMaxDate: (mDate) => set((state) => ({ maxDate: mDate })),

      setEmailFetching: (eFetching) =>
        set((state) => ({ emailFetching: eFetching })),

      setApplicationSending: (appSending) =>
        set((state) => ({ applicationSending: appSending })),
    }),
    {
      name: "UXSOC_MEMBERS",
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).map(([key, value]) => [
            key,
            value === null || value === "" ? "" : value,
          ])
        ),
    //  getStorage: () => Cookies,
    //  setStorage: (key, value) => Cookies.set(key, value),
    }
  )
);
