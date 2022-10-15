import clsx from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

// Pattern de composição
// Quando trabalha com componentes que são conjuntos de outros vários componentes
// Ao invés de retornar um componente sozinho, com várias variações e dentro dele tem vários subcomponentes...
// é melhor exportar mais de um componente que quando juntos podem formar um componente maior com suas variações

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 h-12 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300 outline-none">
      {children}
    </div>
  );
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot
      className="w-6 h-6 text-gray-400"
    >
      {children}
    </Slot>
  );
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}

// TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}