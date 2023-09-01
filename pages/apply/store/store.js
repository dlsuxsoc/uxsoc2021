import { create } from "zustand";
import { persist } from "zustand/middleware";

export const applicationDataStore = create(
  persist(
    (set) => ({
      applicationData: {
        firstName: "",
        lastName: "",
        nickname: "",
        mOB: "",
        dOB: "",
        yOB: "",
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
        Development: false,
        Externals: false,
        Development: false,
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
    }
  )
);
