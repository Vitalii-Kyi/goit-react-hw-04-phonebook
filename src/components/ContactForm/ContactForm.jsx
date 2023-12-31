import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { FormThumb } from './ContactForm.styled';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Wrong name format'
    )
    .required('Must be filled'),
  number: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Wrong number format'
    )
    .required('Must be filled'),
});

export const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {
        onAddContact({ id: nanoid(), ...values });
        actions.resetForm();
      }}
    >
      <FormThumb>
        <label>
          Name
          <Field name="name" placeholder="Enter name" />
          <ErrorMessage name="name" component="b" />
        </label>

        <label>
          Number
          <Field type="tel" name="number" placeholder="Enter number" />
          <ErrorMessage name="number" component="b" />
        </label>

        <button type="submit">Add contact</button>
      </FormThumb>
    </Formik>
  );
};