import React, {useCallback, useEffect, useState} from "react";

import {AutoComplete, Button, Drawer, Form, FormInstance, Input, Row, Select, Space} from 'antd';
import './AddressDrawer.css'
import {addressApi} from "../../../api/AddressApi";
import {Address} from "./organisation-details/RegistrationTypes";

const {Option} = Select;

interface Country {
    id: number | undefined,
    shortName: string | undefined
}

interface Region {
    id: number,
    name: string
}

interface RegionOption {
    id: number,
    name: string,
    value: string
}

interface City {
    id: number | undefined,
    name: string | undefined
}

interface CityOption {
    id: number,
    name: string,
    value: string
}

interface StreetOption {
    id: number,
    name: string,
    value: string
}

interface CountryResponse {
    id: number,
    code: string,
    shortName: string,
    fullName: string,
    alpha2: string,
    alpha3: string
}

interface RegionResponse {
    id: number,
    name: string,
    code: string
}

interface CityResponse {
    id: number,
    code: string,
    name: string
}

interface StreetResponse {
    id: number,
    name: string,
    postalCode: string
}

interface AddressDrawerProps {
    visible: boolean,
    showDrawer: () => void,
    onClose: () => void,
    onSubmit: () => void,
    form: FormInstance,
    initialData: Address
}

const AddressDrawer: React.FC<AddressDrawerProps> = ({visible, showDrawer, onClose, initialData, onSubmit, form}) => {

    const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

    const [selectedRegionId, setSelectedRegionId] = useState<number | undefined>()

    const [selectedCityId, setSelectedCityId] = useState<number | undefined>()

    const [selectedStreetId, setSelectedStreetId] = useState<number | undefined>()

    const [countries, setCountries] = useState<Array<Country>>([])

    const [optionRegions, setOptionRegions] = useState<Array<RegionOption>>([])

    const [optionCities, setOptionCities] = useState<Array<CityOption>>([])

    const [optionStreets, setOptionStreets] = useState<Array<StreetOption>>([])

    const fetchCountries = useCallback(async () => {
        const response = await addressApi.getAllCountries()
        if (response.status === 200) {
            const responseCountries: Array<Country> = []
            response.data.map((e: CountryResponse) => responseCountries.push({id: e.id, shortName: e.shortName}))
            setCountries(responseCountries)
        }
    }, [])

    const fetchRegions = useCallback(async () => {
        const response = await addressApi.getAllRegionsByCountry(form.getFieldValue("country"))
        if (response.status === 200) {
            const responseRegionsOptions: Array<RegionOption> = []
            response.data.map((e: RegionResponse) => responseRegionsOptions.push({
                id: e.id,
                name: e.name,
                value: e.name
            }))
            setOptionRegions(responseRegionsOptions)
        }
    }, [])

    const fetchCities = useCallback(async (regionId: number) => {
        const response = await addressApi.getAllCities(regionId)
        if (response.status === 200) {
            const responseCitiesOptions: Array<CityOption> = []
            response.data.map((e: CityResponse) => {
                responseCitiesOptions.push({id: e.id, value: e.name, name: e.name})
            })
            setOptionCities(responseCitiesOptions)
        }
    }, [])

    const fetchStreets = useCallback(async (cityId: number) => {
        const response = await addressApi.getAllStreetsByCity(cityId)
        if (response.status === 200) {
            const responseStreetsOptions: Array<StreetOption> = []
            response.data.map((e: CityResponse) => {
                responseStreetsOptions.push({id: e.id, value: e.name, name: e.name})
            })
            setOptionStreets(responseStreetsOptions)
        }
    }, [])

    useEffect(() => {
        fetchCountries()
    }, [fetchCountries])

    useEffect(() => {
        if (selectedCountry) {
            fetchRegions()
        }
    }, [selectedCountry])

    useEffect(() => {
        if (selectedRegionId) {
            fetchCities(selectedRegionId)
        }
    }, [selectedRegionId])

    useEffect(() => {
        if (selectedCityId) {
            fetchStreets(selectedCityId)
        }
    }, [selectedCityId])


    const onValuesChange = (changedValues: any, allValues: any) => {
        if (changedValues.country) {
            form.resetFields(["region", "city", "street"])
            setOptionRegions([])
            setOptionCities([])
            setOptionStreets([])
        }
    }

    return (
        <>

            <Drawer
                title="Добавление адреса"
                width={720}
                visible={visible}
                bodyStyle={{paddingBottom: 80}}
                onClose={() => onClose()}
                extra={
                    <Space>
                        <Button onClick={onSubmit} type="primary">
                            Принять
                        </Button>
                    </Space>
                }
            >
                <Form
                    layout="vertical"
                    form={form}
                    onValuesChange={onValuesChange}
                >
                    <Form.Item
                        initialValue={initialData.country ? initialData.country : ''}
                        name="country"
                        label="Страна"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, выберите страну!"
                            }
                        ]}
                        hasFeedback
                    >
                        <Select id="country" size="large" onChange={((value: any) => {
                            setSelectedCountry(value)
                        })}>
                            {countries.map(e => {
                                if (e.shortName) {
                                    return (
                                        <Option id={e.id} key={e.id} value={e.shortName}>{e.shortName}</Option>
                                    )
                                }
                            })}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        initialValue={initialData.region ? initialData.region : ''}
                        name="region"
                        label="Область"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, выберите область!"
                            }
                        ]}
                        hasFeedback
                    >
                        <AutoComplete
                            size="large"
                            placeholder="пример: Тверская область"
                            options={optionRegions}
                            filterOption={(inputValue, option) =>
                                option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                            onChange={
                                ((value, {id}: any) => {
                                    if (id) {
                                        setSelectedRegionId(id)
                                    }
                                })
                            }
                        />
                    </Form.Item>

                    <Form.Item
                        initialValue={initialData.city ? initialData.city : ''}
                        name="city"
                        label="Город / Населенный пункт / Деревня"
                        rules={[
                            {
                                required: true,
                                message: "Пожалуйста, введите город!"
                            }
                        ]}
                        hasFeedback
                    >

                        <AutoComplete
                            size="large"
                            placeholder="пример: Тверь"
                            options={optionCities}
                            filterOption={(inputValue, option) =>
                                option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                            onChange={
                                ((value, {id}: any) => {
                                    if (id) {
                                        setSelectedCityId(id)
                                    }
                                })
                            }
                        />
                    </Form.Item>

                    <Form.Item
                        initialValue={initialData.street ? initialData.street : ''}
                        name="street"
                        label="Улица"
                        hasFeedback
                        rules={[{
                            required: true,
                            message: "Пожалуйста, введите название улицы"
                        }]}
                        tooltip="Если в указанном населенном пункте нет улицы, продублируйте название населенного пункта в данном поле"
                    >

                        <AutoComplete
                            size="large"
                            placeholder="пример: Пролетарская"
                            options={optionStreets}
                            filterOption={(inputValue, option) =>
                                option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                            onChange={
                                ((value, {id}: any) => {
                                    if (id) {
                                        setSelectedStreetId(id)
                                    }
                                })
                            }
                        />
                    </Form.Item>

                    <Row justify="space-between">
                        <Form.Item
                            initialValue={initialData.house ? initialData.house : ''}
                            name="house"
                            label="Дом"
                            hasFeedback
                            rules={[{
                                required: true,
                                message: "Обязательно к заполнению!"
                            }]}

                        >
                            <Input/>
                        </Form.Item>


                        <Form.Item
                            initialValue={initialData.building ? initialData.building : ''}
                            name="building"
                            label="Корпус"
                            tooltip="Номер корпуса или строения"
                            hasFeedback
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            initialValue={initialData.flat ? initialData.flat : ''}
                            name="flat"
                            label="Квартира"
                            tooltip="Номер квартиры, офиса или помещения"
                        >
                            <Input/>
                        </Form.Item>
                    </Row>
                </Form>
            </Drawer>
        </>
    )
}

export default AddressDrawer