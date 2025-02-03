// import { ChangeEvent, useState, FormEvent } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

import Button from "../Button/Button";
import { LoginFormContainer, Title, InputsContainer } from "./styles";
import Input from "../input/Input";
import { LoginFormValues } from "./types";

function LoginForm() {
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  // const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   // console.log(event);
  //   setEmail(event.target.value);
  // };

  // const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };

  // const onLogin = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(email);
  //   console.log(password);
  // };

  //create a scheme using Yup
  const schema = Yup.object().shape({
    email: Yup.string().required('Field email is required')
      .email('Field has type email')
      .max(20, 'Max 20 symbols')
      .min(10, 'Min 10 symbols')
      .typeError('Email must be a string'),
    password: Yup.number().required('Field password is required')
      .typeError('Password must be a number')
      .test('Check min passwords length', 'Min 10 symbols', (value) => String(value).length >= 10)
      .test('Check max passwords length', 'Max 20 symbols', (value) => String(value).length <= 20)
  });


  //Настройка формы. useFormik, как аргумент принимает объект настройки, для определенной
  //При вызове useFormik возвращается объект, в котором храняться значения из полей, ошибки, различные методы для работы с формой
  const formik = useFormik({
    // initialValues, onSubmit
    initialValues: {
      // Inputs names: email and password
      email: '',
      password: '',
    } as LoginFormValues,
    validationSchema: schema,
    // свойство validateOnChange по умолчанию true, значит валидация будет происходить при каждом изменении в форме
    validateOnChange: false,
    //onSubmit is called when the event 'submit' happenes
    onSubmit: (values: LoginFormValues) => {
      console.table(values);
    }
  });
  console.log(formik);

  return (
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <InputsContainer>
        {/* <input onChange={(event: ChangeEvent<HTMLInputElement>)=>{console.log(event);
      }}/> */}
        <Input
          name="email"
          label="Email*"
          // type="email" добавляет браузерную стилизацию
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
          error={formik.errors.email}
        />
        <Input
          name="password"
          label="Password*"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password"
          error={formik.errors.password}
        />
      </InputsContainer>
      <Button type="submit" name="Login" />
    </LoginFormContainer>
  );
}
export default LoginForm;