import styles from "../styles.module.scss";
import { useForm } from "react-hook-form";
import { Button, ButtonProps } from "../../../components/button";
import { Textfield } from "../../../components/textfield";
import { signInSchema, SignInSchema } from "./schema-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconMail } from "../../../assets/icon-mail";
import { IconLock } from "../../../assets/icon-lock";
import { useState } from "react";
import { IconEye } from "../../../assets/icon-eye";
import { IconEyeOff } from "../../../assets/icon-eye-off";
import { SamePropsInitial } from "../same-props-initial";

export const Signin = ({ setShowLogin }: SamePropsInitial) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({ resolver: zodResolver(signInSchema) });

  const submit = (data: SignInSchema) => {
    console.log(data);
  };

  const textfieldProps = {
    email: {
      label: "Email:",
      prefix: <IconMail />,
      input: { placeholder: "Digite seu email", ...register("email") },
      error: errors.email?.message,
    },
    password: {
      label: "Senha:",
      prefix: <IconLock />,
      suffix: showPassword ? (
        <IconEyeOff action={() => setShowPassword(false)} />
      ) : (
        <IconEye action={() => setShowPassword(true)} />
      ),
      input: {
        placeholder: "Digite sua senha",
        ...register("password"),
        type: showPassword ? "text" : "password",
      },
      error: errors.password?.message,
    },
  };

  const buttonProps: { [key: string]: ButtonProps } = {
    submit: {
      button: { type: "submit" },
      name: "Entrar",
      type: "primary",
    },
    signup: {
      button: {
        onClick: () => {
          setShowLogin(false);
        },
      },
      name: "Criar conta",
      type: "secondary",
    },
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={styles["form"]}>
      <Textfield {...textfieldProps.email} />
      <Textfield {...textfieldProps.password} />
      <footer className={styles["form_column"]}>
        <Button {...buttonProps.submit} />
        <Button {...buttonProps.signup} />
      </footer>
    </form>
  );
};
