import { useState, useEffect } from 'react';
import {DictionaryItem} from "../../types/dictionaries";
import Api from '../../api/refistration';

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

export const useSendData = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const sendData = async (data: any) => {
        setLoading(true);
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