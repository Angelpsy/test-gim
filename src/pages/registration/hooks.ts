import { useState, useEffect } from 'react';
import {DictionaryItem} from "../../types/dictionaries";
import Api, {SignupInput, fieldsNamesToSend} from '../../api/refistration';

export const useGetDictionaryByName = (dictionaryByName: string) => {
    const [dictionary, setDictionary] = useState<DictionaryItem[]>([]);

    useEffect(() => {
        // имитация запроса словаря на сервере
        console.log(`fetch ${dictionaryByName}`);
        setTimeout(() => {
            const res: DictionaryItem[] = [
                {
                    id: 'latvia',
                    title: 'Latvia',
                },
                {
                    id: 'lebanon',
                    title: 'Lebanon',
                },
                {
                    id: 'lesotho',
                    title: 'Lesotho',
                },
                {
                    id: 'liberia',
                    title: 'Liberia',
                },
                {
                    id: 'libya',
                    title: 'Libya',
                },
            ];
            setDictionary(res);
        }, 500);
    }, [dictionaryByName]);

    return dictionary;
}

const getDataToSend = (data: any): SignupInput => {
    const res: {[name: string]: any} = {};
    fieldsNamesToSend.forEach((name) => {
        res[name] = data[name];
    });
    return res as SignupInput;
}

export const useSendData = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const sendData = async (data: any) => {
        setLoading(true);
        data = getDataToSend(data);
        try {
            await Api.sendSignUp(data);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }

    return {
        isLoading,
        error,
        sendData,
    }
}