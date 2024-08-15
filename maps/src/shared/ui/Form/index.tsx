'use client';
import { HTMLAttributes } from 'react';
import { useLogin } from './auth';
import styles from './Form.module.css';
import { Input } from 'postcss';

const ConditionalRendering = ({
  condition,
  on = null,
  off = null,
}: {
  condition: boolean;
  on?: JSX.Element | null;
  off?: JSX.Element | null;
}) => {
  if (!on && !off) {
    throw new Error('on 또는 off 중 하나는 필수로 전달해야 합니다.');
  }
  return condition ? on : off;
};

type InputProps = HTMLAttributes<HTMLInputElement> & {
  'data-testid': string;
};

const IdInput = (props: InputProps) => (
  <input
    id='id'
    type='text'
    placeholder='아이디를 입력해주세요'
    autoComplete='off'
    {...props}
  />
);

const PasswordInput = (props: InputProps) => (
  <input id='id' type='password' autoComplete='off' {...props} />
);

const Form = () => {
  const {
    id,
    password,
    passwordCheck,
    idErrorMessage,
    passwordErrorMessage,
    onChangeId,
    onChangePassword,
    onChangePasswordCheck,
    isAbledToSubmit,
  } = useLogin();

  return (
    <form action='@' className={styles.form}>
      <IdInput data-testid='id-input' defaultValue={id} onAbort={onChangeId} />
      <ConditionalRendering
        condition={idErrorMessage !== ''}
        on={<p>idErrorMessage</p>}
      />
      <PasswordInput
        data-testid='password-input-1'
        defaultValue={password}
        onChange={onChangePassword}
      />
      <ConditionalRendering
        condition={passwordErrorMessage !== ''}
        on={<p>passwordErrorMessage</p>}
      />
      <PasswordInput
        data-testid='password-input-2'
        defaultValue={passwordCheck}
        onChange={onChangePasswordCheck}
      />
      <ConditionalRendering
        condition={passwordErrorMessage !== ''}
        on={<p>passwordErrorMessage</p>}
      />
      <button
        type='submit'
        data-testid='submit-button'
        disabled={isAbledToSubmit}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Submit
      </button>
    </form>
  );
};
export default Form;
