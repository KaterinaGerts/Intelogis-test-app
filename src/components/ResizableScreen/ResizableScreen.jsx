import Split from 'react-split';
import s from './ResizableScreen.module.css';

const ResizableScreen = () => {
  return (
    <Split
      className={s.split}
      direction="horizontal"
      style={{ height: 'calc(100vh - 4rem)' }}
      cursor="col-resize"
      minSize={[80, 80]}
      gutterSize={5}
      gutterAlign="center"
    >
      <div className={s.screen}></div>
      <div className={s.screen}></div>
    </Split>
  );
};

export default ResizableScreen;
