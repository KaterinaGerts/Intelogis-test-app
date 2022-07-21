import 'antd/dist/antd.css';
import { Table } from 'antd';

const columns = [
  {
    title: '№',
    width: 100,
    dataIndex: 'number',
    key: 'number',
    fixed: 'left',
  },
  {
    title: 'Номер машины',
    width: 100,
    dataIndex: 'car',
    key: 'car',
    fixed: 'left',
  },
  {
    title: 'ФИО водителя',
    dataIndex: 'driver',
    key: '1',
  },
  {
    title: 'Погрузка',
    dataIndex: 'cargo',
    key: '2',
  },
  {
    title: 'Разгрузка',
    dataIndex: 'loadout',
    key: '3',
  },
];
const data = [
  {
    number: 1,
    key: '1',
    car: 'Л227АБ',
    driver: 'Иванов Иван Иванович',
    cargo: 'Красногорск',
    loadout: 'Одинцово',
  },
  {
    number: 2,
    key: '2',
    car: 'E225ОВ',
    driver: 'Петров Петр Петрович',
    cargo: 'Одинцово',
    loadout: 'Зеленоград',
  },
  {
    number: 3,
    key: '3',
    car: 'Я315КИ',
    driver: 'Сидоров Александр Александрович',
    cargo: 'Зеленоград',
    loadout: 'Мытищи',
  },
];

const LogisticTable = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{
        x: 1300,
      }}
    />
  );
};

export default LogisticTable;
