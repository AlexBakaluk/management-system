import React from "react";
import {Row} from "antd";
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;

const columns = [
    {
        title: 'Название бренда',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Название организации',
        dataIndex: 'organisationName',
        key: 'organisationName'
    },
    {
        title: 'Действия',
        dataIndex: 'actions',
        key: 'actions',
        render: (text: any, record: any) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    }
]

const dataSource = [
    {
        key: 1,
        name: 'Brand 1',
        organisationName: 'ИП Хватова А.М.'
    },
    {
        key: 2,
        name: 'Brand 2',
        organisationName: 'ИП Хватова А.М.'
    },
    {
        key: 3,
        name: 'Brand 3',
        organisationName: 'ИП Бакалюк А.С.'
    },
    {
        key: 4,
        name: 'Brand 4',
        organisationName: 'ИП Бакалюк А.С.'
    },
    {
        key: 5,
        name: 'Brand 5',
        organisationName: 'ООО Ромашка'
    }
]

export const BrandsList = () => {
    return (
        <div>
            <Row>
                Ntn
            </Row>
            <Table columns={columns} dataSource={dataSource}/>
        </div>
    )
}