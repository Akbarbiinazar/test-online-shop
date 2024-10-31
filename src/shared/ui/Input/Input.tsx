import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './Input.module.scss';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ElementType;
  rightIcon?: React.ElementType;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, leftIcon: LeftIcon, rightIcon: RightIcon, ...props },
    ref
  ) => {
    return (
      <div className={styles.input}>
        {LeftIcon && (
          <div className={`${styles.input__icon} left-3`}>
            <LeftIcon className="w-5 h-5" />
          </div>
        )}
        <input
          type={type}
          ref={ref}
          className={cn(
            styles.input__input,
            {
              [styles.input__input + '--left-icon']: LeftIcon,
              [styles.input__input + '--right-icon']: RightIcon,
            },
            className
          )}
          {...props}
        />
        {RightIcon && (
          <div className={`${styles.input__icon} right-3`}>
            <RightIcon className="w-5 h-5" />
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export { Input };
