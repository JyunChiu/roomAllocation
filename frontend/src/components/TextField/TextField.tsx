import React, { FC, memo, useMemo, useState, ReactNode } from "react";
import clsx from "clsx";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff, Search } from "@mui/icons-material";
import { IconButton } from "components/Buttons";
import { EMPTY_PASSWORD } from "src/constants";
import { StyledTextField } from "./TextField.style";

type TOnChange = React.ChangeEvent<HTMLInputElement>;

interface Props {
  name?: string;
  label?: string;
  value?: string | number;
  onChange?: (name: string, val: string | number) => void;
  onBlur?: (name: string, val?: string | number) => void;
  placeholder?: string;
  className?: string;
  labelFixed?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  hasIcon?: boolean;
  Icon?: ReactNode;
  type?: string;
  fullWidth?: boolean;
  size?: "medium" | "small";
  helperText?: string;
  error?: boolean;
  editMode?: boolean;
}

const CustomizedTextField: FC<Props> = ({
  name = "",
  label,
  value = "",
  onChange = (): void => {},
  onBlur = (): void => {},
  placeholder,
  className,
  labelFixed,
  disabled,
  readOnly,
  hasIcon,
  Icon = <Search />,
  type = "text",
  fullWidth = false,
  size = "small",
  helperText = "",
  error,
  editMode,
}) => {
  const [isFocused, setIsFocus] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleFocus = (): void => setIsFocus(true);

  const handleBlur = (): void => {
    setIsFocus(false);
    onBlur(name, value);
  };

  const isLabelShrink = useMemo(() => {
    const hasValue = value !== "";
    return labelFixed ?? (isFocused || hasValue);
  }, [value, labelFixed, isFocused]);

  const handleChange = (e: TOnChange): void => {
    const val = e.target.value;
    console.log("???", typeof val);
    onChange(name, val);
  };

  const handleClickShowPassword = (): void => setShowPassword((prev) => !prev);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
  };

  const endAdornment = useMemo((): ReactNode => {
    if (type !== "password") return undefined;
    return (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          $iconSize="SM"
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    );
  }, [type, showPassword]);

  const fieldType = useMemo(() => {
    if (type !== "password") return "text";
    return showPassword ? "text" : "password";
  }, [type, showPassword]);

  // show * when this field type is password and no value in edit mode
  const displayValue = useMemo(() => {
    if (editMode && value === "" && type === "password") {
      return showPassword ? value : EMPTY_PASSWORD;
    }
    return value;
  }, [value, type, showPassword, editMode]);

  return (
    <StyledTextField
      variant="outlined"
      className={clsx("muiTextField", className, {
        hasIcon,
      })}
      color="primary"
      key={name}
      label={label}
      value={displayValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={(event): void => event.stopPropagation()}
      placeholder={placeholder}
      disabled={disabled}
      InputProps={{
        readOnly,
        type: fieldType,
        endAdornment,
        startAdornment: hasIcon ? (
          <InputAdornment position="start">{Icon}</InputAdornment>
        ) : null,
      }}
      InputLabelProps={{
        shrink: isLabelShrink,
      }}
      fullWidth={fullWidth}
      size={size}
      helperText={helperText}
      error={error}
    />
  );
};

export default memo(CustomizedTextField);
