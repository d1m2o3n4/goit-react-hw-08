import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { registerThunk } from "../redux/auth/operations";
import { Link } from "react-router-dom";

export const RegistrationPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handlesubmit = (values) => {
    dispatch(registerThunk(values));
    console.log(values);
  };
  return (
    <div>
      <div>
        <h1>Registrate now!</h1>
        <div>
          <Formik initialValues={initialValues} onSubmit={handlesubmit}>
            <Form>
              <div className="logInWrapper">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Input name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Input email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Input password"
                    className="input input-bordered"
                    required
                  />
                  <Link to="/login">Already heva account?</Link>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit">
                    Registrate
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
