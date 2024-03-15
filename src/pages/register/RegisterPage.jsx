import React from "react";
import MainLayout from "../../components/MainLayout";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/index/users";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ name, email, password }) => {
      return signup({ name, email, password });
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onchange",
  });
  const submitHandler = (data) => {
    const { name, email, password } = data;
    mutate({ name, email, password });
  };
  const password = watch("password");

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
            Inregistreaza-te
          </h1>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="name"
                className="text-[#5a7184] font-semibold block"
              >
                Nume
              </label>
              <input
                type="text"
                name="name"
                id="name"
                {...register("name", {
                  minLength: {
                    value: 1,
                    message: "Numele trebuie sa aiba cel putin un caracter",
                  },
                  required: {
                    value: true,
                    message: "Numele este obligatoriu",
                  },
                })}
                placeholder="Introdu numele..."
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.name ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.name?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="email"
                className="text-[#5a7184] font-semibold block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                    message: "Intro un email valid",
                  },
                  required: {
                    value: true,
                    message: "Emailul este obligatoriu",
                  },
                })}
                placeholder="Introdu emailul..."
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                  errors.email ? "border-red-500" : "border-[#c3cad9]"
                }`}
              />
              {errors.email?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="password"
                className="text-[#5a7184] font-semibold block"
              >
                Parola
              </label>
              <input
                type="password"
                name="password"
                id="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Parola este obligatorie",
                  },

                  minLength: {
                    value: 6,
                    message: "Parola trebuie sa aiba cel putin 6 caractere",
                  },
                })}
                placeholder="Parola ta..."
                className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
              />
              {errors.password?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="confirmPassword"
                className="text-[#5a7184] font-semibold block"
              >
                Confirmare parola
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirmarea parolei este obligatorie",
                  },
                  validate: (value) => {
                    if (value !== password) {
                      return "Parolele nu se potrivesc";
                    }
                  },
                })}
                placeholder="Confirma parola..."
                className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]"
              />
              {errors.confirmPassword?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>
            <Link
              to="/forget-password"
              className="text-sm font-semibold text-primary"
            >
              Ai uitat parola?
            </Link>
            <button
              type="submit"
              disabled={!isValid || isLoading}
              className="w-full bg-primary text-white font-bold text-lg px-8 py-4 rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Inregistrare
            </button>
            <p className="text-sm font-semibold text-[#5a7184]">
              Deja membru?{" "}
              <Link to="/login" className="text-primary">
                Conecteaza-te!
              </Link>
            </p>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default RegisterPage;
