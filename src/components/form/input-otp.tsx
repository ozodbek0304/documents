"use client";

import { cn } from "@/lib/utils";
import {
  type FieldValues,
  type Path,
  type UseFormReturn,
  Controller,
} from "react-hook-form";
import type { ClassNameValue } from "tailwind-merge";
import ErrorMessage from "../ui/error-message";
import { Label } from "../ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

interface IProps<IForm extends FieldValues> {
  methods: UseFormReturn<IForm>;
  name: Path<IForm>;
  label?: string;
  wrapperClassName?: ClassNameValue;
  hideError?: boolean;
  required?: boolean;
  length?: number;
}

export default function FormInputOTP<IForm extends FieldValues>({
  methods,
  name,
  label,
  wrapperClassName,
  hideError = false,
  required = false,
  length = 6,
  ...props
}: IProps<IForm> & any) {
  const {
    control,
    formState: { errors },
  } = methods;

  return (
    <fieldset
      className={cn(
        "flex flex-col items-center gap-1 w-full",
        wrapperClassName
      )}
    >
      {label && (
        <Label
          htmlFor={name}
          className={cn(!!errors?.[name] && "text-destructive")}
          required={required}
        >
          {label}
        </Label>
      )}

      <Controller
        control={control}
        name={name}
        rules={{
          required: required
            ? {
                value: true,
                message: `${label || "Field"}ni kiriting`,
              }
            : undefined,
        }}
        render={({ field }) => (
          <InputOTP
            maxLength={length}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
            value={field.value ? String(field.value) : ""}
            onChange={(newValue) => field.onChange(newValue)}
            onBlur={field.onBlur}
            {...props}
          >
            <InputOTPGroup className="flex gap-2">
              {Array.from({ length }).map((_, index) => (
                <InputOTPSlot
                  key={index}
                  className="border !rounded text-xl"
                  index={index}
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        )}
      />

      {!hideError && errors[name] && (
        <ErrorMessage>
          {(errors[name]?.message as string) || errors.root?.[name]?.message}
        </ErrorMessage>
      )}
    </fieldset>
  );
}
