import { Formik, Form, Field, FormikHelpers } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import styles from './SearchBar.module.css';

interface SearchFormValues {
  query: string;
}

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps): JSX.Element {
  const initialValues: SearchFormValues = {
    query: '',
  };

  const handleSubmit = (
    values: SearchFormValues,
    helpers: FormikHelpers<SearchFormValues>
  ) => {
    if (values.query.trim() === '') {
      toast('Please, input your query');
      return;
    }

    onSubmit(values.query);
    helpers.resetForm();
  };

  return (
    <header className={styles.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={styles.form}>
          <Field
            className={styles.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={styles.button} type="submit">
            Search
          </button>
          <Toaster />
        </Form>
      </Formik>
    </header>
  );
}
