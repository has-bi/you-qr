import { QrStyleContext } from '@/context/index';
import { useContext, useState } from 'react';

const TextInput = () => {
  const { dispatch } = useContext(QrStyleContext);
  const [text, setText] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
    dispatch({
      type: 'SET_QR_VALUE',
      payload: { value: value || 'Enter your text' },
    });
  };

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <label
        htmlFor="text-input"
        className="mb-3 block font-inter text-sm font-medium text-gray-700"
      >
        Enter your text
      </label>
      <textarea
        id="text-input"
        rows={4}
        value={text}
        onChange={handleTextChange}
        className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 font-inter focus:border-transparent focus:ring-2 focus:ring-primary"
        placeholder="Type your text here..."
        maxLength={1000}
      />
      <div className="mt-2 font-inter text-xs text-gray-500">{text.length}/1000 characters</div>
    </div>
  );
};

export default TextInput;
