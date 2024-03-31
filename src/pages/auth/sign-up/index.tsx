//* Import Libraries
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

//* Import Styled Component
import {
  Form,
  Section,
  MyInput,
  MyInputLabel,
  MyLoadingButton,
} from "../../../../../crm-market/new-frontend/src/style";
import { IconButton } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { FormControl } from "@mui/material";

//* Import Static
import $axios from "../../../../../crm-market/new-frontend/src/services";
import { enqueueSnackbar } from "notistack";

//* Import Assets
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface CustomResp {
  data: {
    accessToken: string;
    refreshToken: string;
    role: string;
  };
}

const SignUp = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement).entries()
    );

    try {
      setLoading(true);

      const resp: CustomResp = await $axios.post(`/auth/login`, newData);

      localStorage.setItem("ac", resp?.data?.accessToken);
      localStorage.setItem("re", resp?.data?.refreshToken);
      localStorage.setItem("role", resp?.data?.role.toUpperCase());

      enqueueSnackbar(`Muvaffaqiyatli login qilindi!`, {
        variant: "success",
        autoHideDuration: 1000,
      });

      navigate("/");
    } catch (err) {
      // if (err?.response?.status == 400) {
      //   enqueueSnackbar(`error`, {
      //     variant: "error",
      //     autoHideDuration: 1000,
      //   });
      // }
      // enqueueSnackbar(err?.response?.data?.message, {
      //   variant: "error",
      //   autoHideDuration: 1000,
      // });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section className="h-screen w-full flex relative">
      <Form onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
        <FormControl variant="standard">
          <MyInputLabel shrink htmlFor="username-input">
            Foydalanuvchi nomi
          </MyInputLabel>
          <MyInput
            required
            type="text"
            name="username"
            id="username-input"
            placeholder="Foydalanuvchi nomini kiriting"
            defaultValue="ziyadem"
          />
        </FormControl>
        <FormControl variant="standard">
          <MyInputLabel shrink htmlFor="password-input">
            Foydalanuvchi paroli
          </MyInputLabel>
          <MyInput
            required
            name="password"
            id="password-input"
            defaultValue="ziyadem"
            type={show ? "" : "password"}
            placeholder=" Foydalanuvchi parolini kiriting"
            endAdornment={
              <InputAdornment position="end">
                {show ? (
                  <IconButton
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <AiFillEye className="text-[1.5rem] cursor-pointer" />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => {
                      setShow(true);
                    }}
                  >
                    <AiFillEyeInvisible className="text-[1.5rem] cursor-pointer" />
                  </IconButton>
                )}
              </InputAdornment>
            }
          />
        </FormControl>
        <MyLoadingButton
          color="info"
          type="submit"
          loading={loading}
          variant="contained"
        >
          Yuborish
        </MyLoadingButton>
      </Form>
    </Section>
  );
};

export default SignUp;
