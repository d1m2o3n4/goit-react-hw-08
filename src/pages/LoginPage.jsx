import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginThunk } from "../redux/auth/operations";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const handlesubmit = (values) => {
    dispatch(loginThunk(values));
  };
  return (
    <div>
      <div>
        <h1>Login now!</h1>
        <div>
          <Formik initialValues={initialValues} onSubmit={handlesubmit}>
            <Form>
              <div className="logInWrapper">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="email"
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
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <Link to="/register">Don't heva account?</Link>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit">
                    Login
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
