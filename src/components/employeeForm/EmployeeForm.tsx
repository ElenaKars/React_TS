import * as Yup from 'yup';
import { useFormik } from 'formik';

import Button from "../Button/Button";
import Input from "../input/Input";
import { Checkbox, CheckboxContainer, Checkboxlabel, EmployeeFormWrapper, InputsContainer, Title } from "./styles";
import { EmployeeFormValues } from './types';

function EmployeeForm() {
    const schema = Yup.object().shape({
        fullName: Yup.string().required('Field Full Name is required')
            .min(5, "Full Name must be at least 5 characters")
            .max(50, "Full Name must be at most 50 characters")
            .matches(/^[a-zA-Z\s]*$/, "Job Title must only contain letters and spaces")
            .typeError("Full name must be a string"),
        age: Yup.number().required('Field Age is required')
            .typeError('Age must be a number')
            .min(18, 'Age must be at least 18')
            .max(80, 'Age must be at most 80'),
        jobTitle: Yup.string().max(30, 'Job Title must be at most 30 characters')
            .matches(/^[a-zA-Z\s]*$/, "Job Title must only contain letters and spaces"),
        termsAccepted: Yup.boolean().required('Field Terms Accepted is required')
            .oneOf([true], "You must accept the terms and conditions")
    });

    const formik = useFormik({
        initialValues: {
            fullName: '',
            age: '',
            jobTitle: '',
            termsAccepted: false,
        } as EmployeeFormValues,
        validationSchema: schema,
        validateOnChange: false,
        onSubmit: (values: EmployeeFormValues) => {
            console.table(values);
        }
    });
    return (
        <EmployeeFormWrapper onSubmit={formik.handleSubmit}>
            <Title>Employee Form</Title>
            <InputsContainer>
                <Input
                    name='fullName'
                    label="Full Name*"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    placeholder="Enter your full name"
                    error={formik.errors.fullName}
                />
                <Input
                    name='age'
                    label="Age*"
                    value={formik.values.age.toString()}
                    onChange={formik.handleChange}
                    placeholder="Enter your age"
                    error={formik.errors.age}
                />
                <Input
                    name='jobTitle'
                    label="Job Title"
                    value={formik.values.jobTitle}
                    onChange={formik.handleChange}
                    placeholder="Enter your job title"
                    error={formik.errors.jobTitle}
                />
                <CheckboxContainer>
                    <Checkbox
                        type='checkbox'
                        id='termsAccepted'
                        name='termsAccepted'
                        checked={formik.values.termsAccepted}
                        onChange={formik.handleChange}
                    />
                    <Checkboxlabel htmlFor='termsAccepted'>I accept the Terms and Conditions*</Checkboxlabel>
                </CheckboxContainer>
                {/* <Input type='checkbox' name='termsAccepted' label='I accept the Terms and Conditions*' checked={formik.values.termsAccepted} onChange={formik.handleChange} error={formik.errors.termsAccepted} /> */}
            </InputsContainer>
            <Button type="submit" name="CREATE" disabled={!formik.values.termsAccepted} />
        </EmployeeFormWrapper>
    );
}

export default EmployeeForm;