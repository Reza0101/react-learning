import React, { useState, useEffect } from "react";
import style from "./Logout.module.css";
import { Link, Navigate } from "react-router-dom";
import { TiUserAddOutline } from "react-icons/ti";
import { BiLogIn } from "react-icons/bi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const Logout = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const submitForm = () => {
    if (!errors.length) {
        console.log('success');
        window.location.href = '/'
    }
  };


  return (
    <div className={style.container}>
      <div className={style.iamgeContainer}>
        <Link className={style.image} to="/">
          <img src="https://botostart.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.c523c566.png&w=256&q=100" />
        </Link>
      </div>
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
        <div className={style.formInformation} dir="rtl">
          <p className={style.titleForm}>عضویت در بوتواستارت</p>
          <p className={style.textNumberPhone}>نام و نام خانوادگی</p>
          <form onSubmit={handleSubmit(submitForm)}>
            <input
              {...register("password", {
                required: true,
                minLength: 5,
              })}
              className={style.inputName}
            />
            {errors.password && <p className={style.errors}>نام معتبر نمیباشد</p>}
            <p className={style.textNumberPhone}>
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
            />
            {errors.phone && <p className={style.errors}>شماره همراه معتبر نمیباشد</p>}

            <button className={style.btnSend} type="submit">
              ثبت نام
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Logout;
