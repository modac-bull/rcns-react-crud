import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';

export default function FormExamples() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <Card>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */ }
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register('example')} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register('exampleRequired', { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </Card>
  );
}

const Card = styled.div`
padding: 50px;
  input {
    padding: 12px 12px;
    border: 1px solid black;
    margin-right: 20px;
  }
`;
