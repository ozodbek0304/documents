import React, { ChangeEvent, KeyboardEvent, useRef } from "react";
import { Input, InputProps } from "../ui/input";
import { useRouter } from "next/router";
import { SEARCH_DEBOUNCE_TIME } from "@/constants/components";

type Props = {
  paramName?: string;
  clearOther?: boolean;
  redirectPath?: string;
} & InputProps;

export default function ParamInput({
  paramName = "search",
  placeholder = "Qidirish..",
  clearOther,
  redirectPath,
  ...props
}: Props) {
  const { push, query } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function handlePush(val: string | undefined) {
    if (!val || val.trim() === "") return;
    const newQuery = clearOther
      ? { [paramName]: val }
      : { ...query, [paramName]: val };

    if (!val) {
      delete newQuery[paramName];
    }
    return push({
      pathname: redirectPath || "/",
      query: newQuery,
    });
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      const searchVal = inputRef.current?.value;
      handlePush(searchVal);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      handlePush(val);
    }, SEARCH_DEBOUNCE_TIME);
  }

  return (
    <Input
      defaultValue={query[paramName!] as string}
      ref={inputRef}
      onChange={handleChange}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      {...props}
    />
  );
}
