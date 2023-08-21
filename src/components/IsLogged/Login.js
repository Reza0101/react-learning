import React, { useState } from "react";
import style from "./Login.module.css";
import { Link } from "react-router-dom";
import { TiUserAddOutline } from "react-icons/ti";
import { BiLogIn } from "react-icons/bi";
import { useForm, SubmitHandler } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = () => {
    console.log(errors);
  };

  return (
    <div className={style.container}>
      <div className={style.iamgeContainer}>
        <Link className={style.image} to="/">
          <img src="https://botostart.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.c523c566.png&w=256&q=100" />
        </Link>
      </div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className={style.form}>
          <div className={style.btnLinkRoute}>
            <Link className={style.linkLogout} to="/register">
              <span>ثبت نام</span>
              <TiUserAddOutline className={style.iconLogout} />
            </Link>
            <Link className={style.linkLogin} to="/login">
              <span>ورود</span>
              <BiLogIn className={style.iconLogin} />
            </Link>
          </div>
          <div className={style.formInformation}>
            <p className={style.titleForm}>ورود به سایت بوتواستارت</p>
            <p className={style.textNumberPhone} dir="rtl">
              شماره موبایل خود را وارد کنید
            </p>
            <input
              {...register("phone", {
                required: true,
                validate: {
                  matchMedia: (v) => 
                    /^(\+98?)?{?(0?9[0-9]{9,9}}?)$/.test(v),
                },
                
              })}
              className={style.inputPhone}
              dir="rtl"
            />
            {errors.phone && <p className={style.erros}>شماره معتبر نمیباشد</p>}
            <button
              className={style.btnSend}
              type="submit"
            >
              ارسال کد تایید
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
