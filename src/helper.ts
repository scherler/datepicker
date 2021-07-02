const SUBMIT = [' ', 'Enter'];

export const navigate = ({
  navigation,
  exec,
  close,
}: {
  navigation: (days: number) => void;
  exec: () => void;
  close: () => void;
}) => {
  return {
    onKeyDown: (event: any) => {
      // KeyboardEvent does not work since the svg later complains
      const key = event.key;
      switch (key) {
        case 'Home':
          event.preventDefault();
          navigation(-0.1);
          break;
        case 'PageUp':
          event.preventDefault();
          if (event.shiftKey) {
            navigation(360);
          } else {
            navigation(30);
          }
          break;
        case 'PageDown':
          event.preventDefault();
          if (event.shiftKey) {
            navigation(-360);
          } else {
            navigation(-30);
          }
          break;
        case 'End':
          event.preventDefault();
          navigation(0.1);
          break;
        case 'ArrowUp':
          event.preventDefault();
          navigation(-7);
          break;
        case 'ArrowDown':
          event.preventDefault();
          navigation(7);
          break;
        case 'ArrowLeft':
          event.preventDefault();
          navigation(-1);
          break;
        case 'ArrowRight':
          event.preventDefault();
          navigation(1);
          break;
        case 'Escape':
          event.preventDefault();
          close();
          break;
        default:
          if (SUBMIT.filter((innerKey) => innerKey === key).length > 0) {
            event.preventDefault();
            exec();
          }
          break;
      }
    },
  };
};

export const buttonize = (
  action: (event: any) => void,
  keys: string[] = SUBMIT,
  {
    tabIndex = 0,
    role = 'button',
  }: {
    tabIndex?: number;
    role?: string;
  } = {}
) => {
  return {
    role,
    tabIndex,
    onClick: action,
    onKeyDown: (event: any) => {
      const key = event.key;
      const shouldExec = keys.filter((innerKey) => innerKey === key).length > 0;
      if (shouldExec) {
        event.preventDefault();
        action(event);
      }
    },
  };
};

export const generateSuggestedKey = (date: Date) =>
  `datepicker-day-${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

export default {
  buttonize,
  generateSuggestedKey,
  navigate,
};
