import Split from 'react-split';
import s from './ResizableScreen.module.css';
import LogisticTable from '../Table';
import Map from '../Map';

const ResizableScreen = () => {
  return (
    <Split
      className={s.split}
      direction="horizontal"
      style={{ height: 'calc(100vh - 4rem)' }}
      cursor="ew-resize"
      minSize={[80, 80]}
      gutterSize={5}
      gutterAlign="center"
    >
      <div className={s.screen}>
        <LogisticTable />
      </div>
      <div className={s.screen}>
        <Map />
      </div>
    </Split>
  );
};

export default ResizableScreen;
