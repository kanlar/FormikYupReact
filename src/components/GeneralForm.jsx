import React from "react";
import { useFormik } from "formik";
import "../style/GeneralForm.css";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function GeneralForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        age: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>Email</label>
        <input
          className={errors.email ? "input-error" : ""}
          type="email"
          name="email"
          value={values.email}
          id="email"
          placeholder="Mail adresinizi giriniz"
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="inputDiv">
        <label>Yaş</label>
        <input
          className={errors.age ? "input-error" : ""}
          type="number"
          value={values.age}
          id="age"
          placeholder="Yaşınzı giriniz"
          onChange={handleChange}
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="inputDiv">
        <label>Şifre</label>
        <input
          className={errors.password ? "input-error" : ""}
          type="password"
          value={values.password}
          id="password"
          placeholder="Şifrenizi giriniz"
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="inputDiv">
        <label>Şifre Tekrarı</label>
        <input
          className={errors.confirmPassword ? "input-error" : ""}
          type="password"
          value={values.confirmPassword}
          id="confirmPassword"
          placeholder="Şifrenizi tekrar giriniz"
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>
      <button disabled={isSubmitting} type="submit">
        Kaydet
      </button>
    </form>
  );
}

export default GeneralForm;
