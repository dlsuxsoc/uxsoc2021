import React, { useEffect, useState } from "react";
import { restrictRange } from "../../../helpers/restrictRange";

const FormDate = ({ label, required, formData, setFormData, name }) => {
  const [maxDate, setMaxDate] = useState(30);
  useEffect(() => {
    setMaxDate(
      new Date(formData[name].year, formData[name].month, 0).getDate()
    );
    let num = restrictRange(
      formData[name].date,
      formData[name].date,
      1,
      maxDate
    );
    if (formData[name].month !== null && formData[name].year !== null) {
      setFormData({
        ...formData,
        [name["date"]]: num,
      });
    }
    return () => {};
  }, [formData[name].month, formData[name].year, maxDate]);

  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 mb-4">
      <label className="block mb-6">
        {label} <span className="italicize">{!required && "(Optional)"}</span>
      </label>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-start-1">
          <input
            name={`${name}.month`}
            type="number"
            min={1}
            max={12}
            className="form-input py-2 px-3 w-full"
            placeholder="Month"
            required
            value={formData[name].month}
            onChange={(e) => {
              setFormData({
                //eslint-disable-nextline
                ...formData,
                [name]: {
                  ...formData[name],
                  month:
                    restrictRange(
                      parseInt(e.target.value),
                      formData[name].month,
                      1,
                      12
                    ) || "",
                },
              });
            }}
          />
        </div>
        <div className="col-start-2">
          <input
            name={`${name}.date`}
            type="number"
            min={1}
            max={maxDate}
            className="form-input py-2 px-3 w-full"
            placeholder="Day"
            required
            value={formData[name].date}
            onChange={(e) => {
              setFormData({
                ...formData,
                [name]: {
                  ...formData[name],
                  date:
                    restrictRange(
                      parseInt(e.target.value),
                      formData[name].date,
                      1,
                      maxDate
                    ) || "",
                },
              });
            }}
          />
        </div>
        <div className="col-start-3">
          <input
            name={`${name}.year`}
            type="number"
            min={1920}
            max={new Date().getUTCFullYear() - 16}
            maxLength={4}
            required
            className="form-input py-2 px-3 w-full"
            placeholder="Year"
            value={formData[name].year}
            onChange={(e) =>
              setFormData({
                ...formData,
                [name]: {
                  ...formData[name],
                  year: parseInt(e.target.value) || "",
                },
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FormDate;
