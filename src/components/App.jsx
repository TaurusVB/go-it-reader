import { Reader } from './reader/reader';
import publications from '../publications.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Reader items={publications} />
    </div>
  );
};
