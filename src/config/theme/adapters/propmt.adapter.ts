import prompt from 'react-native-prompt-android';

interface Options {
  title: string;
  subtitle?: string;
  buttons?: PromptButtons[];
  promptType?: 'default' | 'plain-text' | 'secure-text';
  placeholder?: string;
  defaultValue?: string;
}

interface PromptButtons {
  text: string;
  onPress: () => void;
  style?: 'cancel' | 'default' | 'destructive';
}

export const showPrompt = ({
  title,
  subtitle = '',
  buttons = [],
  promptType = 'plain-text',
  placeholder,
  defaultValue,
}: Options) => {
  prompt(title, subtitle, buttons, {
    type: promptType,
    cancelable: false,
    defaultValue: defaultValue,
    placeholder: placeholder,
  });
};
