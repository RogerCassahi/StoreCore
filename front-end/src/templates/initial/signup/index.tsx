import styles from "../styles.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IconEye } from "../../../assets/icon-eye";
import { IconEyeOff } from "../../../assets/icon-eye-off";
import { IconLock } from "../../../assets/icon-lock";
import { Button, ButtonProps } from "../../../components/button";
import { Textfield } from "../../../components/textfield";
import { SignUpSchema, signUpSchema } from "./schema-form";
import { SamePropsInitial } from "../same-props-initial";
import { IconMail } from "../../../assets/icon-mail";

export const Signup = ({ setShowLogin }: SamePropsInitial) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({ resolver: zodResolver(signUpSchema) });

  const submit = (data: SignUpSchema) => {
    console.log(data);
    setShowLogin(true);
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
    confirmPassword: {
      label: "Confirmar Senha:",
      prefix: <IconLock />,
      suffix: showConfirmPassword ? (
        <IconEyeOff action={() => setShowConfirmPassword(false)} />
      ) : (
        <IconEye action={() => setShowConfirmPassword(true)} />
      ),
      input: {
        placeholder: "Digite sua senha novamente",
        ...register("confirmPassword"),
        type: showConfirmPassword ? "text" : "password",
      },
      error: errors.confirmPassword?.message,
    },
  };
  const buttonProps: { [key: string]: ButtonProps } = {
    submit: {
      button: { type: "submit" },
      name: "Confirmar",
      type: "primary",
    },
    signin: {
      button: {
        onClick: () => {
          setShowLogin(true);
        },
      },
      name: "Cancelar",
      type: "secondary",
    },
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={styles["form"]}>
      <Textfield {...textfieldProps.email} />
      <Textfield {...textfieldProps.password} />
      <Textfield {...textfieldProps.confirmPassword} />
      <footer className={styles["form_row"]}>
        <Button {...buttonProps.signin} />
        <Button {...buttonProps.submit} />
      </footer>
    </form>
  );
};
